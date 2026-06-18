# Hướng dẫn sử dụng Tên Miền Thực (Production Setup)

## 1. Tạo file `.env` cho Frontend

Tạo file `frontend/.env`:

```env
# Cho localhost
REACT_APP_API_URL=http://localhost:5000

# Hoặc cho production (thay yourdomain.com bằng tên miền của bạn)
REACT_APP_API_URL=https://api.yourdomain.com
```

## 2. Cấu hình Backend để chạy trên tên miền

### Cách 1: Chạy cục bộ (Local)
Backend vẫn chạy ở port 5000, nhưng frontend trỏ đến URL công khai

### Cách 2: Deploy lên Server (Recommend)

#### Option A: Sử dụng Vercel (Frontend) + Render/Railway (Backend)

**Frontend - Vercel:**
1. Đẩy code lên GitHub
2. Kết nối Vercel với GitHub
3. Thêm Environment Variable: `REACT_APP_API_URL=https://your-backend-url.com`
4. Vercel tự động deploy

**Backend - Render/Railway:**
1. Đẩy code lên GitHub
2. Kết nối Render hoặc Railway
3. Thêm Environment Variables từ `.env.example`
4. Service tự động cấp cho bạn URL (ví dụ: `https://your-backend.onrender.com`)

#### Option B: VPS riêng (DigitalOcean, Linode, etc)

```bash
# Trên server của bạn
git clone [your-repo]
cd thucongmynghe-website/backend
npm install

# Cài đặt PM2 để chạy backend 24/7
npm install -g pm2
pm2 start server.js --name "api"
pm2 startup
pm2 save

# Cài đặt Nginx làm reverse proxy
# File: /etc/nginx/sites-available/default

upstream api {
    server 127.0.0.1:5000;
}

server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 3. Cấu hình CORS cho tên miền thực

Sửa file `backend/server.js`:

```javascript
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://yourdomain.com',
    'https://www.yourdomain.com',
    'https://your-frontend-url.vercel.app'
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
```

## 4. Để gắn vào Facebook

Trong Setting của fanpage Facebook:

1. **Về** → **Thêm nút hành động**
2. Chọn **Liên hệ**
3. Điền URL của trang Contact: `https://yourdomain.com/contact`
4. Lưu

**Hoặc** sử dụng Facebook Plugin:

```html
<!-- Thêm vào website, ví dụ file HTML hoặc React component -->
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0" nonce="YOUR_NONCE"></script>

<!-- Plugin Messenger -->
<div class="fb-page" data-href="https://www.facebook.com/yourbusinesspage" data-tabs="messages" data-width="500" data-height="500"></div>
```

## 5. Kiểm tra hoạt động

Trước khi deploy:

```bash
# 1. Build frontend
cd frontend
npm run build

# 2. Kiểm tra cấu hình API
curl https://yourdomain.com/api/health

# 3. Test gửi form
# Truy cập https://yourdomain.com/contact
# Điền form → Nhấn gửi
# Kiểm tra email
```

## Tóm tắt:

| | Local | Production |
|---|---|---|
| **Frontend** | `http://localhost:3000` | `https://yourdomain.com` |
| **Backend** | `http://localhost:5000` | `https://api.yourdomain.com` |
| **Env Variable** | `REACT_APP_API_URL=http://localhost:5000` | `REACT_APP_API_URL=https://api.yourdomain.com` |
| **Facebook Plugin** | N/A | Gắn vào fanpage |

## Cần giúp?

- Mua domain: [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com)
- Deploy frontend: [Vercel](https://vercel.com), [Netlify](https://netlify.com)
- Deploy backend: [Render](https://render.com), [Railway](https://railway.app), [Heroku](https://heroku.com)
- Email: Vẫn dùng Gmail SMTP hoặc chuyển sang SendGrid/Mailgun
