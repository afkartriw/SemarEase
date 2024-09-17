package models

import (
	"errors"

	"gorm.io/gorm"
)

// Enum untuk Role
const (
	RoleSuperAdmin = "superadmin"
	RoleOperator   = "operator"
	RoleMahasiswa  = "mahasiswa"
)

type User struct {
	ID       int    `json:"id" gorm:"primaryKey"`                   // Primary key untuk ID user
	Name     string `json:"name" gorm:"not null"`                   // Nama user, tidak boleh null
	Username string `json:"username" gorm:"unique"`                 // Username harus unik
	Email    string `json:"email" gorm:"unique;not null"`           // Email harus unik dan tidak boleh null
	Password string `json:"password" gorm:"not null"`               // Password tidak boleh null
	Role     string `json:"role" gorm:"not null;default:mahasiswa"` // Role dengan default mahasiswa
}

// Sebelum menyimpan data ke database, validasi role
func (u *User) BeforeSave(tx *gorm.DB) (err error) {
	if !isValidRole(u.Role) {
		return errors.New("role tidak valid")
	}
	return nil
}

// Function untuk validasi role
func isValidRole(role string) bool {
	switch role {
	case RoleSuperAdmin, RoleOperator, RoleMahasiswa:
		return true
	default:
		return false
	}
}
