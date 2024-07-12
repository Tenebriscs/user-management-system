# Kullanıcı Yönetim Sistemi (User Management System)

Bu proje, kullanıcıların kayıt olabileceği, giriş yapabileceği ve profil bilgilerini güncelleyebileceği bir RESTful API'dir.

## Kullanılan Teknolojiler

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt.js
- dotenv

## Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/username/user-management-system.git
   cd user-management-system
   ```

2. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```

3. .env dosyasını oluşturun ve gerekli değişkenleri ekleyin:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Sunucuyu başlatın:
   ```bash
   npm start
   ```

## API Endpoints

### Auth

- `POST /api/auth/register` - Kullanıcı kaydı
- `POST /api/auth/login` - Kullanıcı girişi

### Users

- `GET /api/users/profile` - Kullanıcı profilini al
- `PUT /api/users/profile` - Kullanıcı profilini güncelle
