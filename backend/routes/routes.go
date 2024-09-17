package routes

import (
	"semarease/controllers"
	"semarease/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Set up the session store
	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("mysession", store))

	// Konfigurasi CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Ganti dengan URL frontend
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	// Rute public (tanpa proteksi)
	r.POST("/login", controllers.LoginController)
	r.POST("/register", controllers.RegisterController)
	r.POST("/logout", controllers.LogoutController) // Ubah ke POST untuk logout

	// Rute yang membutuhkan otentikasi dan role-based access control
	adminGroup := r.Group("/admin")
	adminGroup.Use(middleware.AuthMiddleware()) // Memastikan user sudah login
	adminGroup.Use(middleware.RoleMiddleware()) // Periksa role berdasarkan request path
	{
		adminGroup.GET("/", controllers.AdminDashboard)
	}

	operatorGroup := r.Group("/operator")
	operatorGroup.Use(middleware.AuthMiddleware()) // Memastikan user sudah login
	operatorGroup.Use(middleware.RoleMiddleware()) // Periksa role berdasarkan request path
	{
		operatorGroup.GET("/", controllers.OperatorDashboard)
	}

	mahasiswaGroup := r.Group("/mahasiswa")
	mahasiswaGroup.Use(middleware.AuthMiddleware()) // Memastikan user sudah login
	mahasiswaGroup.Use(middleware.RoleMiddleware()) // Periksa role berdasarkan request path
	{
		mahasiswaGroup.GET("/", controllers.MahasiswaDashboard)
	}

	return r
}
