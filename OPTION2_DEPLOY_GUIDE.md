# Hướng dẫn Deploy với Domain Riêng (Option 2)

## 📋 Các bước thực hiện:
1. ✅ Mua domain (60-80k/năm)
2. ✅ Deploy backend lên server
3. ✅ Deploy frontend với domain của bạn
4. ✅ Gắn vào Facebook Fanpage

---

## **Bước 1: Mua Domain (5 phút)**

### Tại Namecheap (khuyên dùng):
1. Truy cập: https://namecheap.com
2. Tìm kiếm tên domain (ví dụ: `thucongmynghe.vn`)
3. Giá thường **60-80k/năm** cho `.vn`
4. Thêm vào giỏ → Thanh toán (visa/thẻ ngân hàng)
5. ✅ Lưu Username và Password

**Các domain tên miền rẻ:**
- `.vn` - 60-80k/năm (Việt Nam)
- `.com` - 150-200k/năm (Quốc tế)
- `.store` - 100k/năm (Online store)

---

## **Bước 2: Deploy Backend (20 phút)**

### Sử dụng Render (miễn phí, dễ nhất)

**2.1 Chuẩn bị GitHub:**

```bash
# Tạo .env file (KHÔNG đẩy lên GitHub)
# backend/.env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
ADMIN_EMAIL=your-email@gmail.com
PORT=5000
NODE_ENV=production
```

**2.2 Deploy trên Render:**

1. Truy cập: https://render.com
2. Đăng ký với GitHub → Kết nối GitHub
3. Nhấn **New +** → Chọn **Web Service**
4. Chọn repository `thucongmynghe-website`
5. Cấu hình:
   - **Name:** `thucongmynghe-api`
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
6. Thêm Environment Variables (từ `.env`):
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=your-email@gmail.com`
   - `SMTP_PASS=xxxx xxxx xxxx xxxx`
   - `ADMIN_EMAIL=your-email@gmail.com`
   - `NODE_ENV=production`
7. Nhấn **Create Web Service**
8. ✅ Chờ deploy xong (~2-3 phút)
9. 📌 **Lưu URL:** `https://thucongmynghe-api.onrender.com`

---

## **Bước 3: Deploy Frontend (20 phút)**

### Sử dụng Vercel (miễn phí, tích hợp tên miền)

**3.1 Chuẩn bị:**

```bash
# frontend/.env.production
REACT_APP_API_URL=https://thucongmynghe-api.onrender.com
```

**3.2 Deploy trên Vercel:**

1. Truy cập: https://vercel.com
2. Đăng ký với GitHub → Kết nối GitHub
3. Nhấn **Import Project** → Chọn `thucongmynghe-website`
4. Cấu hình:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Thêm Environment Variable:
   - **Key:** `REACT_APP_API_URL`
   - **Value:** `https://thucongmynghe-api.onrender.com`
6. Nhấn **Deploy**
7. ✅ Chờ deploy xong (~3-5 phút)
8. 📌 **Lưu URL:** `https://thucongmynghe-website.vercel.app`

---

## **Bước 4: Liên kết Domain với Vercel (15 phút)**

**4.1 Tại Vercel:**

1. Vào Project Settings
2. Chọn **Domains**
3. Nhập domain: `thucongmynghe.vn`
4. Chọn **Add**
5. Vercel hiển thị **Nameserver** (4 dòng):
   ```
   ns1.vercel-dns.com.
   ns2.vercel-dns.com.
   ns3.vercel-dns.com.
   ns4.vercel-dns.com.
   ```
6. 📌 **Lưu lại những nameserver này**

**4.2 Tại Namecheap:**

1. Đăng nhập Namecheap
2. Vào **Domain List** → Chọn domain của bạn
3. Nhấn **Manage**
4. Tìm mục **Nameservers** → Chọn **Custom DNS**
5. Xóa nameserver cũ, thêm 4 nameserver từ Vercel
6. Nhấn **Save**
7. ✅ Chờ DNS update (1-48 giờ, thường 5-10 phút)

**4.3 Kiểm tra:**

```bash
# Mở terminal
ping thucongmynghe.vn
# Hoặc truy cập: https://thucongmynghe.vn (chờ DNS update)
```

---

## **Bước 5: Cấu hình CORS cho Backend**

Sửa `backend/server.js` để cho phép requests từ domain mới:

```javascript
const allowedOrigins = [
    'http://localhost:3000',
    'https://thucongmynghe.vn',
    'https://www.thucongmynghe.vn',
    'https://thucongmynghe-website.vercel.app'
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

**Push code lên GitHub:**
```bash
git add .
git commit -m "Update CORS for production domain"
git push
```

✅ Vercel & Render sẽ tự động re-deploy

---

## **Bước 6: Gắn vào Facebook Fanpage**

### Cách 1: Nút "Liên hệ" trên Fanpage
1. Vào **Settings** Fanpage
2. Chọn **About** → **Add Button**
3. Chọn **Contact** → Loại: **Website**
4. Điền URL: `https://thucongmynghe.vn/contact`
5. ✅ Lưu

### Cách 2: Messenger Plugin (chat widget)
Thêm vào `frontend/src/pages/Home.tsx` hoặc bất kỳ page nào:

```html
<!-- Thêm vào cuối file Home.tsx hoặc trong <head> -->
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" 
  src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0" 
  nonce="YOUR_NONCE"></script>

<div class="fb-page" 
  data-href="https://www.facebook.com/your-page-id" 
  data-tabs="messages,events" 
  data-width="500" 
  data-height="500"></div>
```

---

## **Checklist Hoàn Thành:**

- [ ] Mua domain trên Namecheap
- [ ] Deploy backend trên Render
- [ ] Deploy frontend trên Vercel
- [ ] Liên kết domain với Vercel
- [ ] Cập nhật CORS trên backend
- [ ] Kiểm tra form hoạt động
- [ ] Gắn vào Facebook Fanpage
- [ ] Test gửi form → kiểm tra email

---

## **URLs của bạn sau khi xong:**

| | URL |
|---|---|
| **Website** | https://thucongmynghe.vn |
| **API Backend** | https://thucongmynghe-api.onrender.com |
| **Contact Form** | https://thucongmynghe.vn/contact |
| **Facebook** | [Fanpage của bạn] |

---

## **Troubleshooting:**

| Lỗi | Giải pháp |
|---|---|
| Domain không hoạt động | Chờ DNS update (1-48h), kiểm tra Nameserver |
| Form không gửi được | Kiểm tra CORS backend, API URL đúng chưa |
| Email không nhận được | Kiểm tra SMTP_PASS, 2FA Gmail, SMTP settings |
| Render ngủ | Render free plan ngủ sau 15p. Upgrade hoặc dùng Railway |

---

## **Chi phí:**
- Domain: **60-80k/năm**
- Vercel: **Miễn phí** (cũng có plan paid)
- Render: **Miễn phí** (web service free, nhưng ngủ)
- Gmail SMTP: **Miễn phí**

**Tổng cộng: ~60-80k/năm** ✅

---

Bạn đã sẵn sàng? Tôi sẽ giúp bạn từng bước! 🚀
