import classNames from "classnames/bind";
import styles from "./Articels.module.scss";
import Image from "next/image";
import { imgs } from "../../../../public/images";
import { Newspaper } from "lucide-react";
import Label from "@/components/Label/Labe";
import Link from "next/link";

const cx = classNames.bind(styles);

const articles = [
  {
    title: "10 SEO Myths You Need to Stop Believing",
    description:
      "Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions...",
    link: "#",
  },
  {
    title: "Maximizing ROI with Social Media Advertising",
    description:
      "Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns...",
    link: "#",
  },
  {
    title: "How Content Marketing Fuels Long-Term Growth",
    description:
      "Content isn’t just king—it’s the foundation of sustainable business growth. Learn how blogs, videos, and more...",
    link: "#",
  },
  {
    title: "The Art of A/B Testing: Perfecting Your Campaigns",
    description:
      "From headlines to call-to-actions, small tweaks can make a big difference. Learn how to use A/B testing...",
    link: "#",
  },
  {
    title: "Understanding Google’s Latest Algorithm Update",
    description:
      "Search rankings change constantly—stay ahead by learning about the latest Google update...",
    link: "#",
  },
  {
    title: "5 Ways AI is Changing Digital Marketing",
    description:
      "Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage AI...",
    link: "#",
  },
];

function Articels() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("head")}>
        <div className={cx("grid grid-cols-[40%_60%] gap-x-30")}>
          <div className={cx("banner")}>
            <Image className={cx("image")} src={imgs.HeroBanner} alt="Banner" />
          </div>
          <div className={cx("info")}>
            <div className={cx("label")}>Marketing Strategies</div>
            <h1 className={cx("title")}>
              PPC vs Organic Marketing: Which One Is Right for Your Business?
            </h1>
            <p className={cx("desc")}>
              sads asdo kpasj dasd asdnasjid;as dasj dasd asdmasdsasd sdjsad
              sadjasd sadmas dasjdjsamd sadmas dsa dma sdas dasnd asdmsadmsad
              sda sd asdsa s asdasdas as das asd as d
            </p>
          </div>
        </div>
      </div>
      <div className={cx("main")}>
        <div className={cx("main-head")}>
          <div className={cx("owner-wrap")}>
            <h2 className={cx("main-author")}>Le Thanh Dat</h2>
            <p className={cx("main-role")}>Website Owner</p>
          </div>
          <Newspaper size={30} />
        </div>
        <div className={cx("content-wrap")}>
          <h2 className={cx("title")}>
            Trí tuệ nhân tạo: Cuộc cách mạng thầm lặng trong cuộc sống hiện đại
          </h2>

          <p className={cx("intro")}>
            Trong vòng chưa đầy một thập kỷ, trí tuệ nhân tạo (AI) đã vượt khỏi
            khuôn khổ phòng thí nghiệm để len lỏi vào từng ngóc ngách của đời
            sống con người. Từ những gợi ý trên Spotify, Netflix cho đến các
            chatbot chăm sóc khách hàng, AI đang âm thầm định hình cách chúng ta
            tiếp nhận thông tin, giải trí và đưa ra quyết định.
          </p>

          <p>
            Có thể bạn không để ý, nhưng mỗi ngày bạn đã và đang tương tác với
            hàng chục mô hình AI khác nhau. Khi bạn mở điện thoại bằng khuôn
            mặt, hỏi trợ lý ảo một câu đơn giản, hoặc lướt Facebook và thấy bài
            viết đúng “gu” của mình, thì đó chính là AI đang hoạt động. Và điểm
            đặc biệt là: nó học càng nhiều, càng trở nên thông minh hơn.
          </p>

          <h3 className={cx("sub-title")}>
            AI trong đời sống: Tiện ích hay kiểm soát?
          </h3>
          <p>
            Trong y tế, AI đang hỗ trợ bác sĩ chẩn đoán sớm ung thư, gợi ý phác
            đồ điều trị và thậm chí là dự đoán nguy cơ tái phát. Ở lĩnh vực giao
            thông, các thuật toán đang giúp xe tự lái dần trở thành hiện thực.
            Trong lĩnh vực giáo dục, học sinh có thể được gợi ý bài học cá nhân
            hóa dựa trên điểm mạnh và điểm yếu của từng em.
          </p>

          <p>
            Tuy nhiên, song song với tiện ích là hàng loạt câu hỏi về đạo đức và
            quyền riêng tư. Liệu AI có đang “quá thông minh”? Dữ liệu cá nhân mà
            bạn cung cấp hàng ngày – từ thói quen mua sắm đến vị trí di chuyển –
            liệu có được sử dụng đúng cách? Một số chuyên gia lo ngại rằng, nếu
            không kiểm soát tốt, AI có thể dẫn đến một xã hội nơi con người bị
            "xếp loại" theo thuật toán.
          </p>

          <h3 className={cx("sub-title")}>
            Tương lai: Con người và AI sẽ cùng tồn tại như thế nào?
          </h3>
          <p>
            Chúng ta đang bước vào kỷ nguyên nơi AI không chỉ là công cụ hỗ trợ,
            mà còn là cộng sự, thậm chí là “bạn đồng hành” trong nhiều quyết
            định lớn nhỏ. Với sự xuất hiện của các mô hình ngôn ngữ lớn, như
            ChatGPT hay Claude, con người không còn là chủ thể duy nhất tạo ra
            tri thức.
          </p>

          <p>
            Câu hỏi đặt ra không còn là “AI có thay thế con người không?”, mà là
            “Chúng ta sẽ thích nghi ra sao khi làm việc cùng AI?”. Những kỹ năng
            như tư duy phản biện, sáng tạo và sự đồng cảm – thứ máy móc chưa thể
            mô phỏng hoàn hảo – sẽ trở thành “vũ khí” quan trọng nhất của chúng
            ta.
          </p>

          <p className={cx("conclusion")}>
            Trí tuệ nhân tạo không còn là xu hướng – nó là hiện tại và tương
            lai. Thay vì lo sợ, đã đến lúc chúng ta chủ động học hỏi, thích nghi
            và chung tay xây dựng một hệ sinh thái AI công bằng, minh bạch và vì
            lợi ích chung của toàn nhân loại.
          </p>
        </div>
      </div>
      <div className={cx("end-main")}>
        <Image src={imgs.Logo} alt="Logo" width={20} height={20} />
      </div>
      <div className={cx("header")}>
        <Label>Explores more</Label>
        <p className={cx("header-desc")}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className={cx("articles-grid")}>
        <div className=" grid grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <div key={index} className={cx("article-card")}>
              <div className={cx("articel-info")}>
                <h3 className={cx("articel-title")}>{article.title}</h3>
                <p className={cx("articel-desc")}>{article.description}</p>
              </div>
              <Link href="/" className={cx("btn-link")}>
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articels;
