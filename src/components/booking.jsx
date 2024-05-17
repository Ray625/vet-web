import { useState } from 'react';
import styles from '../styles/booking.module.scss';

const BookingContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleGroup}>
          <div className={styles.titleBackground}></div>
          <object data="/svg/home_footprint_white.svg" className={styles.footprint} aria-label="footprint"> </object>
          <h2 className={styles.title}>Booking Now</h2>
          <h3 className={styles.subtitle}>線上預約</h3>
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  )
};

const StepGroup = () => {
  return (
    <div className={styles.stepGroup}>
      <div className={`${styles.step1} ${styles.active}`}>
        <div className={styles.stepNum}>1</div>
        <div className={styles.stepName}>選擇門診</div>
      </div>
      <div className={`${styles.step2}`}>
        <div className={styles.stepNum}>2</div>
        <div className={styles.stepName}>輸入預約資料</div>
      </div>
      <div className={`${styles.step3}`}>
        <div className={styles.stepNum}>3</div>
        <div className={styles.stepName}>確認預約資料</div>
      </div>
    </div>
  )
}



const WeekSelection = ({ weeks, onChange }) => {

  return (
    <select name="date" id="date" className={styles.selection} onChange={onChange}>
      {weeks.map((week, index)=>{return <option value={index} key={index}>{week}</option>})}
    </select>
  )
}

const DaySelection = ({ weeks, selectedWeekIndex }) => {
  const formatDate = (date) => {
    const options = { month: '2-digit', day: '2-digit' };
    const dateString = date.toLocaleDateString('en-US', options);
    const weekday = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
    return `${dateString} (${weekday})`;
  }

  const selectedWeek = weeks[selectedWeekIndex];
  const [startDate, endDate] = selectedWeek.split(' ~ ');
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const days = [];
  for (let date = startDateObj; date <= endDateObj; date.setDate(date.getDate() + 1)) {
    const formattedDate = formatDate(date);
    days.push(formattedDate);
  }
  
  return (
    <div className={styles.btnGroup}>  
      {days.map((day) => {
        return (
          <>
            <input type="radio" name="date" id={day} value={day}/>
            <label htmlFor={day} className={styles.dateBtn}>{day}</label>
          </>
        )})}
    </div>
  )
}

const FormStep1 = () => {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0)
  
  const handleWeekChange = (event) => {
     setSelectedWeekIndex(event.target.value)
  }

  const weeks = [
    '2024/04/01 ~ 2024/04/07',
    '2024/04/08 ~ 2024/04/14',
    '2024/04/15 ~ 2024/04/21',
    '2024/04/22 ~ 2024/04/28'
  ]
  
  return (
    <div className={styles.formContainer}>
      <div className={styles.selectBtnGroup}>
        <input type="radio" name="selection" id="timeFirst" value="timeFirst" className={styles.selectionInput} defaultChecked/>
        <label htmlFor="timeFirst" className={styles.selectBtn}>
          <i class="fa-regular fa-calendar"></i>
          依日期
        </label>
        <input type="radio" name="selection" id="doctorFirst" value="doctorFirst" className={styles.selectionInput}/>
        <label htmlFor="doctorFirst" className={styles.selectBtn}>
          <i class="fa-solid fa-user"></i>
          依醫師
        </label>
      </div>
      <form action="post" className={styles.form}>
        <h3 className={styles.formTitle}>請選擇日期</h3>
        <p className={styles.describe}>(僅能預約兩個月內之日期)</p>
        <WeekSelection
          weeks={weeks}
          onChange={handleWeekChange}
        />
        <DaySelection
          selectedWeekIndex={selectedWeekIndex}
          weeks={weeks}
        />
        <h3 className={styles.formTitle}>請選擇時段</h3>
        <div className={styles.btnGroup}>
          <input type="radio" name="time" id="time1" value="time1" />
          <label htmlFor="time1" className={styles.timeBtn}>10:00 ~ 13:00</label>
          <input type="radio" name="time" id="time2" value="time2" />
          <label htmlFor="time2" className={styles.timeBtn}>14:00 ~ 17:30</label>
          <input type="radio" name="time" id="time3" value="time3" />
          <label htmlFor="time3" className={styles.timeBtn}>18:30 ~ 21:00</label>
        </div>
        <h3 className={styles.formTitle}>請選擇門診</h3>
        <div className={styles.btnGroup}>
          <input type="radio" name="doctor" id="doctor1" value="doctor1" />
          <label htmlFor="doctor1" className={styles.doctorBtn}>不指定</label>
          <input type="radio" name="doctor" id="doctor2" value="doctor2" />
          <label htmlFor="doctor2" className={styles.doctorBtn}>王豬皮 醫師(1診)</label>
          <input type="radio" name="doctor" id="doctor3" value="doctor3" />
          <label htmlFor="doctor3" className={styles.doctorBtn}>陳花乾 醫師(2診)</label>
          <input type="radio" name="doctor" id="doctor4" value="doctor4" />
          <label htmlFor="doctor4" className={styles.doctorBtn}>許嘟嘟 醫師(3診)</label>
        </div>
      </form>
      <div className={styles.submitBtnGroup}>
        <button type="submit" className={styles.nextBtn} onClick={(e)=>e.preventDefault() }>下一步</button>
      </div>
    </div>
  )
}

const FormStep2 = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoGroup}>
          <h4 className={styles.infoTitle}>日期</h4>
          <p className={styles.info}>2024/04/03(三)</p>
        </div>
        <div className={styles.infoGroup}>
          <h4 className={styles.infoTitle}>時段</h4>
          <p className={styles.info}>14:00 ~ 18:00</p>
        </div>
        <div className={styles.infoGroup}>
          <h4 className={styles.infoTitle}>醫師</h4>
          <p className={styles.info}>王豬皮 醫師 (2診)</p>
        </div>
      </div>
      <form action="post" className={styles.form}>
        <h3 className={styles.formTitle}>飼主資料</h3>
        <div className={styles.nameGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName" className={styles.inputTitle}>姓氏</label>
            <input name="lastName" id="lastName" type="lastName" autocomplete="family-name" className={styles.nameInput} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName" className={styles.inputTitle}>名字</label>
            <input name="firstName" id="firstName" type="firstName" autocomplete="given-name" className={styles.nameInput}/>
          </div>
          <div className={styles.gender}>
            <input type="radio" name="gender" id="male" defaultChecked className={styles.genderInput} />
            <label htmlFor="male" className={styles.genderLabel}>先生</label>
            <input type="radio" name="gender" id="female" className={styles.genderInput} />
            <label htmlFor="female" className={styles.genderLabel}>小姐</label>
          </div>
        </div>
        <div className={styles.phone}>
          <label htmlFor="phone" className={styles.inputTitle}>手機號碼</label>
          <input name="phone" id="phone" type="tel" autocomplete="tel" placeholder='請輸入您的手機號碼' maxLength={'13'} className={styles.phoneInput}/>
        </div>
        <h3 className={styles.formTitle}>寵物資料</h3>
        <p className={styles.describe}>已選擇 2/3 (一個時段最多預約三隻寵物)</p>
        <div className={styles.petInfo}>
          <h4 className={styles.petInfoTitle}>現有寵物</h4>
          <div className={styles.petInfoInputGroup}>
            <input type="checkbox" name="pet1" id="pet1" className={styles.petInfoInput} />
            <label htmlFor="pet1" className={styles.petInfoLabel}>
              <object data="/svg/booking_cat.svg" className={styles.petInfoIcon} aria-label="petIcon"> </object>
              豬皮
            </label>
            <input type="checkbox" name="pet2" id="pet2" className={styles.petInfoInput} />
            <label htmlFor="pet2" className={styles.petInfoLabel}>
              <object data="/svg/booking_cat.svg" className={styles.petInfoIcon} aria-label="petIcon"> </object>
              阿啾
            </label>
            <input type="checkbox" name="pet3" id="pet3" className={styles.petInfoInput} />
            <label htmlFor="pet3" className={styles.petInfoLabel}>
              <object data="/svg/booking_dog.svg" className={styles.petInfoIcon} aria-label="petIcon"> </object>
              波比
            </label>
          </div>
        </div>
        <button className={styles.addNewPet} onClick={(e) => {
          e.preventDefault()
          alert('add new pet')
        }}>新增寵物</button>
        <div className={styles.newPetInfo}>
          <div className={styles.infoHeader}>
            <h4 className={styles.petInfoTitle}>新寵物</h4>
            <div className={styles.deleteBtn} onClick={()=>{alert('delete pet info')}}>移除</div>
          </div>
          <div className={styles.infoBody}>
            <div className={styles.nameGroup}>
              <div className={styles.inputGroup}>
                <label htmlFor="petName" className={styles.inputTitle}>寵物名</label>
                <input name="petName" id="petName" type="text" autocomplete="auto" className={styles.petNameInput} />
              </div>
              <div className={styles.species}>
                <input type="radio" name="species" id="canine" defaultChecked className={styles.speciesInput}/>
                <label htmlFor="canine" className={styles.speciesLabel}>
                  <object data="/svg/booking_dog.svg" className={styles.petInfoIcon} aria-label="petIcon"> </object>
                  狗
                </label>
                <input type="radio" name="species" id="feline" className={styles.speciesInput}/>
                <label htmlFor="feline" className={styles.speciesLabel}>
                  <object data="/svg/booking_cat.svg" className={styles.petInfoIcon} aria-label="petIcon"> </object>
                  貓
                </label>
              </div>
            </div>
            <div className={styles.infoBdNeuter}>
              <div className={styles.inputGroup}>
                <label htmlFor="petName" className={styles.inputTitle}>絕育狀態</label>
                <select name="neuter" id="neuter" className={styles.selection}>
                  <option value="null">請選擇</option>
                  <option value="notNeutered">未絕育</option>
                  <option value="neutered">已絕育</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="birth" className={styles.inputTitle}>出生年份</label>
                <input name="birth" id="birth" type="text" placeholder='西元年' autocomplete="auto" className={styles.bdayInput} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="history" className={styles.inputTitle}>過去病史</label>
              <textarea name="history" id="history" rows={3} className={styles.infoTextarea}></textarea>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="drug" className={styles.inputTitle}>藥物過敏</label>
              <textarea name="drug" id="drug" rows={3} className={styles.infoTextarea}></textarea>
            </div>
          </div>
        </div>
        <p className={styles.point}>以上資料將同步至會員中心</p>
      </form>
      <div className={styles.submitBtnGroup}>
        <button type="submit" className={styles.prevBtn} onClick={(e)=>e.preventDefault() }>上一步</button>
        <button type="submit" className={styles.nextBtn} onClick={(e)=>e.preventDefault() }>下一步</button>
      </div>
    </div>
  )
}

export { BookingContainer, StepGroup, FormStep1, FormStep2 };