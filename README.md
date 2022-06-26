<h1 align="center">Pollme | Ứng dụng tạo khảo sát trực tuyến</h1>

> Pollme là ứng dụng cho phép người dùng dễ dàng tạo các cuộc thăm dò ý kiến online một cách nhanh chóng, đa tính năng, tuỳ chỉnh theo yêu cầu.

# Tính năng

- Tạo Voting nhanh
- Theo chủ đề, hashtag
- Chọn Public hoặc Private (Những ai có link mới có thể truy cập)
- Thời gian kết thúc
- Yêu cầu đăng nhập để vote hay không
- Tổng số lượng Vote tối đa
- Cho phép tạo thêm các ý kiến không
- Cho phép chọn nhiều lựa chọn hay không
- Cho phép chấm điểm trên lựa chọn hay không
- Bình luận trên bài vote
- Quản lý bài vote cá nhân
- Bài vote yêu thích
- Khám phá các bài vote hay, nhiều người thích.
- Vote và bình luận theo thời gian thực (Realtime)

# Công nghệ sử dụng

## Front-end

- NextJS, ReactJS Hooks
- Apollo Client - GraphQL
- TypeScript
- Internationalization (i18n)
- TailwindCSS
- React Recoil
- Chartjs

## Back-end

- ExpressJS
- TypeScript
- Apollo Server - GraphQL
- MongoDB - Mongoose
- Nodemailer
- TypeGraphQL

# Deployment

- Docker
- VPS

# Tài liệu

- [Database Diagram](https://drive.google.com/file/d/1kEzxs0mTkGiLF9zthhjl3XdHnBhvAmcU/view?usp=sharing)

# Cài đặt

> Chạy bằng nodejs trên máy host hoặc dùng docker

## Client:

- Tạo file .env.local từ file .env, thay đổi các thông tin thích hợp
- `yarn install`
- `yarn dev`

## Backend:

- Tạo file .env từ file .env.local, thay đổi các thông tin thích hợp
- `yarn install`
- `yarn dev`
