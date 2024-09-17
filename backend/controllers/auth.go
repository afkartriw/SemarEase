package controllers

import (
	"net/http"
	"semarease/models"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

var db *gorm.DB // Define global db instance

// SetDB is used to set the db instance from main
func SetDB(database *gorm.DB) {
	db = database
}

var jwtKey = []byte("1cabaaccbe61b20ce7defad57e9c7906ed45acb666d9fa2c6b33668cbdc41958") // JWT secret key

// Credentials struct for handling login
type Credentials struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// Claims struct for JWT token claims
type Claims struct {
	Email string `json:"email"`
	Role  string `json:"role"`
	jwt.StandardClaims
}

// LoginController handles the login functionality using Gin
func LoginController(c *gin.Context) {
	var creds Credentials
	if err := c.ShouldBindJSON(&creds); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	var user models.User
	// Find user by email
	result := db.Where("email = ?", creds.Email).First(&user)
	if result.Error != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
		return
	}

	// Compare the stored password with the provided password
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(creds.Password))
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid password"})
		return
	}

	// Create JWT token
	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		Email: user.Email,
		Role:  user.Role,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	// Create the JWT token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating token"})
		return
	}

	// Set token in cookie
	c.SetCookie("token", tokenString, int(expirationTime.Unix()), "/", "", false, true)

	// Respond with token and role
	c.JSON(http.StatusOK, gin.H{
		"token": tokenString,
		"role":  user.Role,
	})
}

// RegisterController handles user registration using Gin
func RegisterController(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// Hash the password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error hashing password"})
		return
	}
	user.Password = string(hashedPassword)

	// Set default role to "mahasiswa" if not provided
	if user.Role == "" {
		user.Role = "mahasiswa"
	}

	// Save the user to the database
	result := db.Create(&user)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error saving user to the database"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User registered successfully as " + user.Role})
}

// AdminDashboard handles requests to the /admin/dashboard route
func AdminDashboard(c *gin.Context) {
	c.String(http.StatusOK, "Welcome, Superadmin")
}

// OperatorDashboard handles requests to the /operator/dashboard route
func OperatorDashboard(c *gin.Context) {
	c.String(http.StatusOK, "Welcome, Operator")
}

// MahasiswaDashboard handles requests to the /mahasiswa/dashboard route
func MahasiswaDashboard(c *gin.Context) {
	c.String(http.StatusOK, "Welcome, Mahasiswa")
}

// LogoutController handles the logout functionality by clearing the token cookie
func LogoutController(c *gin.Context) {
	// Clear the JWT token from the cookie
	c.SetCookie("token", "", -1, "/", "", false, true) // Set expiration time to -1 to delete the cookie

	// Respond with a success message
	c.JSON(http.StatusOK, gin.H{"message": "Logout successful"})
}
