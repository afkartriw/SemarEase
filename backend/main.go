package main

import (
	"log"
	"semarease/controllers"
	"semarease/models"
	"semarease/routes"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB
var err error

func main() {
	// Koneksi ke database MySQL
	dsn := "root:@tcp(127.0.0.1:3306)/semarease2024?charset=utf8mb4&parseTime=True&loc=Local"
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// Migrasi model User
	db.AutoMigrate(&models.User{})

	// Memasukkan db ke dalam controller
	controllers.SetDB(db)

	// Membuat router menggunakan Gin
	r := routes.SetupRouter()

	// Jalankan server pada port 8080
	log.Println("Server running on port 8080")
	err = r.Run(":8080")
	if err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
