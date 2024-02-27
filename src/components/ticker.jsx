import './ticker.scss' ;

const Ticker =()=>{
  return (
    <div className="tricker-container">
      <div className="tricker-wrapper">
        <p className="news">2024春節營業時間調整公告</p>
      </div>
        <button className="tricker-close-btn" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    </div>
  )
}

export default Ticker;