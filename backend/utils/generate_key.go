package main

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
)

// GenerateSecretKey akan membuat string acak dengan panjang yang ditentukan
func GenerateSecretKey(length int) (string, error) {
	bytes := make([]byte, length)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	return hex.EncodeToString(bytes), nil
}

func main() {
	// Contoh menghasilkan secret key dengan panjang 32 bytes (64 karakter heksadesimal)
	secretKey, err := GenerateSecretKey(32)
	if err != nil {
		panic(err)
	}
	fmt.Println("Generated Secret Key:", secretKey)
}
