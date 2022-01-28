import "./Mail.css"

const Mail = () => {
  return (
      <div className="mail-container">
          <h1 className="mail-title">Newsletter</h1>
          <span className="mail-sub">궁금하신 점이나 문의사항은 메일 남겨주세요.</span>
          <div className="mail-search">
              <input type="text" className="mail-input" />
              <button className="mail-button">▶</button>
          </div>
          </div>
    );
};

export default Mail;
