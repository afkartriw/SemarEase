package middleware

import (
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

var jwtKey = []byte("1cabaaccbe61b20ce7defad57e9c7906ed45acb666d9fa2c6b33668cbdc41958") // Sesuaikan dengan kunci JWT yang digunakan

// Claims struct untuk JWT
type Claims struct {
	Email string `json:"email"`
	Role  string `json:"role"`
	jwt.StandardClaims
}

// RoleMiddleware memeriksa token JWT dan role pengguna berdasarkan request path
func RoleMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Ambil session
		session := sessions.Default(c)
		tokenStr := session.Get("token")

		// Jika tidak ada token di session, redirect ke login
		if tokenStr == nil {
			c.Redirect(http.StatusSeeOther, "/login")
			c.Abort()
			return
		}

		claims := &Claims{}
		// Parsing token JWT
		token, err := jwt.ParseWithClaims(tokenStr.(string), claims, func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})

		if err != nil || !token.Valid {
			c.Redirect(http.StatusSeeOther, "/login")
			c.Abort()
			return
		}

		// Ambil role pengguna dari token
		userRole := strings.ToLower(claims.Role)
		requestPath := c.Request.URL.Path

		// Cek apakah pengguna sedang mengakses halaman yang sesuai dengan role-nya
		if strings.HasPrefix(requestPath, "/admin") && userRole != "superadmin" {
			// Jika pengguna bukan superadmin tetapi mengakses halaman admin, redirect ke halaman dashboard sesuai role
			redirectByRole(c, userRole)
			return
		} else if strings.HasPrefix(requestPath, "/operator") && userRole != "operator" {
			// Jika pengguna bukan operator tetapi mengakses halaman operator, redirect ke halaman dashboard sesuai role
			redirectByRole(c, userRole)
			return
		} else if strings.HasPrefix(requestPath, "/mahasiswa") && userRole != "mahasiswa" {
			// Jika pengguna bukan mahasiswa tetapi mengakses halaman mahasiswa, redirect ke halaman dashboard sesuai role
			redirectByRole(c, userRole)
			return
		}

		// Lanjutkan jika role sesuai dengan rute
		c.Next()
	}
}

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Ambil session
		session := sessions.Default(c)
		tokenStr := session.Get("token")

		// Jika tidak ada token di session, redirect ke login
		if tokenStr == nil {
			c.Redirect(http.StatusSeeOther, "/login")
			c.Abort()
			return
		}

		claims := &Claims{}
		// Parsing token JWT
		token, err := jwt.ParseWithClaims(tokenStr.(string), claims, func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})

		if err != nil || !token.Valid {
			c.Redirect(http.StatusSeeOther, "/login")
			c.Abort()
			return
		}

		// Simpan claims ke context sehingga bisa digunakan di handler berikutnya
		c.Set("email", claims.Email)
		c.Set("role", claims.Role)

		// Lanjutkan jika token valid
		c.Next()
	}
}

// Fungsi untuk redirect berdasarkan role pengguna
func redirectByRole(c *gin.Context, role string) {
	switch role {
	case "superadmin":
		c.Redirect(http.StatusSeeOther, "/admin")
	case "operator":
		c.Redirect(http.StatusSeeOther, "/operator")
	case "mahasiswa":
		c.Redirect(http.StatusSeeOther, "/mahasiswa")
	default:
		c.Redirect(http.StatusSeeOther, "/login")
	}
	c.Abort()
}
