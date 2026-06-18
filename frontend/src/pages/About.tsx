import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-hero-copy">
                    <p className="eyebrow">Về chúng tôi</p>
                    <h1>Nguyễn Đức - Đồ gỗ thủ công mỹ nghệ</h1>
                    <p className="about-intro">
                        Đồ Gỗ Mỹ Nghệ Nguyễn Đức là cơ sở sản xuất tư nhân chuyên chế tác và cung cấp các sản phẩm đồ gỗ thủ công mỹ nghệ cao cấp tại Hà Nội. Với hơn 10 năm kinh nghiệm trong nghề, chúng tôi nhận thiết kế và làm hàng đặt theo yêu cầu riêng của từng khách hàng. Mỗi sản phẩm đều được chúng tôi chăm chút tỉ mỉ từ khâu chọn nguyên liệu gỗ cho đến bước hoàn thiện cuối cùng.
                    </p>
                </div>
                <div className="about-hero-card">
                    <h2>Giá trị cốt lõi</h2>
                    <ul>
                        <li>Chất lượng bền vững</li>
                        <li>Thiết kế tinh tế, sang trọng</li>
                        <li>Nguyên liệu gỗ tự nhiên</li>
                        <li>Phục vụ tận tâm, nhanh chóng</li>
                    </ul>
                </div>
            </section>

            <section className="about-story">
                <div className="story-card">
                    <h2>Hành trình thương hiệu</h2>
                    <p>
                        Khởi nguồn từ niềm đam mê với chất gỗ tự nhiên và nghề thủ công truyền thống, Nguyễn Đức đã phát triển thành một cơ sở sản xuất tư nhân uy tín. Chúng tôi luôn kết hợp hài hòa giữa kinh nghiệm làm nghề lâu năm với thị hiếu hiện đại của khách hàng, tạo ra những sản phẩm đồ gỗ vừa đảm bảo tính thẩm mỹ, vừa có độ bền cao để sử dụng lâu dài.
                    </p>
                </div>
                <div className="story-card story-card--primary">
                    <h2>Tại sao chọn chúng tôi?</h2>
                    <p>
                        Là cơ sở sản xuất tư nhân trực tiếp không qua trung gian, chúng tôi cam kết mang đến mức giá tốt nhất đi kèm chất lượng sản phẩm chuẩn chỉ. Mỗi đơn hàng đều được đội ngũ thợ lành nghề hoàn thiện kỹ lưỡng. Chúng tôi luôn đặt uy tín lên hàng đầu, đảm bảo độ chính xác, tính thẩm mỹ và linh hoạt thay đổi kích thước, mẫu mã theo đúng nhu cầu của gia đình bạn.
                    </p>
                </div>
            </section>

            <section className="about-details">
                <div className="detail-item">
                    <h3>Nguyên liệu</h3>
                    <p>Cơ sở chúng tôi chỉ sử dụng các loại gỗ tự nhiên chất lượng, đã qua quá trình xử lý kỹ thuật bài bản để đảm bảo phôi gỗ luôn ổn định, hạn chế tối đa tình trạng cong vênh hay mối mọt trong quá trình sử dụng.</p>
                </div>
                <div className="detail-item">
                    <h3>Thiết kế</h3>
                    <p>Mẫu mã đa dạng và đa năng, phù hợp với mọi không gian trong nhà: từ bàn ghế sang trọng cho phòng khách, sập gụ tủ chè truyền thống, tranh đá nghệ thuật cho đến các loại đồ thờ cúng trang nghiêm.</p>
                </div>
                <div className="detail-item">
                    <h3>Dịch vụ</h3>
                    <p>Chúng tôi nhận làm hàng theo kích thước phong thủy yêu cầu, hỗ trợ giao hàng tận nơi trên toàn quốc. Là cơ sở tư nhân, chúng tôi luôn hỗ trợ khách hàng bằng sự tận tâm, trách nhiệm và có chế độ bảo hành rõ ràng.</p>
                </div>
            </section>
        </main>
    );
};

export default About;