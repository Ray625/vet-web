import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const StepGroup = ({step}) => {
  return (
    <>
      {(step === 1 || step === 2 || step === 3) && 
        <div className={styles.stepGroup}>
          <div className={step === 1 ? `${styles.step1} ${styles.active}`: `${styles.step1} ${styles.done}`}>
            <div className={styles.stepNum}>1</div>
            <div className={styles.stepName}>選擇門診</div>
          </div>
            <div className={
              step === 1
                ? styles.step2
                : step === 2
                ? `${styles.step2} ${styles.active}`
                : step === 3
                ? `${styles.step2} ${styles.done}`
                : styles.step2
            }>
            <div className={styles.stepNum}>2</div>
            <div className={styles.stepName}>輸入預約資料</div>
          </div>
          <div className={step === 3 ? `${styles.step3} ${styles.active}`: styles.step3}>
            <div className={styles.stepNum}>3</div>
            <div className={styles.stepName}>確認預約資料</div>
          </div>
        </div>
      }
      {step === 4 && 
        <div className={styles.stepGroup}>
          <div className={styles.step4}>
            <div className={styles.stepDone}></div>
            <div className={styles.stepDoneName}>預約成功</div>
          </div>
        </div>
      }  
    </>
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

const BtnGroup = ({name, className, datas}) => {
  return (
    <div className={styles.btnGroup}>
      {datas.map((data) => {
        return (
          <>
            <input type="radio" name={name} id={data.value} value={data.value} />
            <label htmlFor={data.value} className={className}>{data.title}</label>
          </>
        )
      })}
    </div>
  )
}

const NextBtn = ({ title, onClick }) => {
  return (
    <button type="submit" className={styles.nextBtn} onClick={(e) => {
      e.preventDefault()
      onClick()
    }}>{title}</button>
  )
}

const PrevBtn = ({ title, onClick }) => {
  return (
    <button type="submit" className={styles.prevBtn} onClick={(e) => {
      e.preventDefault()
      onClick()
    }}>{title}</button>
  )
}

const FormStep1 = ({handleNextStep}) => {
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

  const timeData = [{
    title: '10:00 ~ 13:00',
    value: 'time1'
  }, {
    title: '14:00 ~ 17:30',
    value: 'time2'
  }, {
    title: '18:30 ~ 21:00',
    value: 'time3'
  }]
  
  const doctorData = [{
    title: '不指定',
    value: 'doctor0'
  }, {
    title: '王豬皮 醫師(1診)',
    value: 'doctor1'
  }, {
    title: '陳花乾 醫師(2診)',
    value: 'doctor2'
  },{
    title: '許嘟嘟 醫師(3診)',
    value: 'doctor3'
  }]
  
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
        <BtnGroup
          name={'time'}
          className={styles.timeBtn}
          datas={timeData}
          />
        <h3 className={styles.formTitle}>請選擇門診</h3>
        <BtnGroup
          name={'doctor'}
          className={styles.doctorBtn}
          datas={doctorData}
          />
      </form>
      <div className={styles.submitBtnGroup}>
        <NextBtn
          title={'下一步'}
          onClick={handleNextStep}
        />
      </div>
    </div>
  )
}

const FormStep2 = ({handlePrevStep, handleNextStep}) => {
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
                <label htmlFor="birth" className={styles.inputTitle}>出生年份</label>
                <input name="birth" id="birth" type="text" placeholder='西元年' autocomplete="auto" className={styles.bdayInput} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="birth" className={styles.inputTitle}>品種</label>
                <input name="breed" id="breed" type="text" autocomplete="auto" className={styles.bdayInput} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="petName" className={styles.inputTitle}>絕育狀態</label>
                <select name="neuter" id="neuter" className={styles.selection}>
                  <option value="null">請選擇</option>
                  <option value="notNeutered">未絕育</option>
                  <option value="neutered">已絕育</option>
                </select>
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
        <PrevBtn
          title={'上一步'}
          onClick={handlePrevStep}
        />
        <NextBtn
          title={'下一步'}
          onClick={handleNextStep}
        />
      </div>
    </div>
  )
}

const InfotableGroup = ({title, info, mark, icon}) => {
  return (
    <div className={styles.infoTableGroup}>
      <div className={styles.tableTitle}>{title}</div>
      <div className={styles.tableInfo}>{info}</div>
      {mark && <div className={styles.tableMark}>{mark}</div>}
      {icon && <object data={icon} className={styles.infoTableIcon} aria-label="petIcon"> </object>}
    </div>
  )
}

const FormStep3 = ({ handlePrevStep, handleSubmit }) => { 
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <div className={styles.infoTable}>
          <h3 className={styles.formTitle}>預約門診</h3>
          <InfotableGroup
            title={'日期'}
            info={'2024/04/03'}
            mark={'(星期三)'}
          />
          <InfotableGroup
            title={'時段'}
            info={'14:00~18:00'}
          />
          <InfotableGroup
            title={'醫師'}
            info={'王豬皮 醫師'}
            mark={'(2診)'}
          /> 
        </div>
        <div className={styles.infoTable}>
          <h3 className={styles.formTitle}>飼主資料</h3>
          <InfotableGroup
            title={'姓名'}
            info={'廖子睿'}
            mark={'(先生)'}
          />
          <InfotableGroup
            title={'手機號碼'}
            info={'0912345678'}
          />
        </div>
        <div className={styles.infoTable}>
          <h3 className={styles.formTitle}>寵物資料</h3>
          <InfotableGroup
            title={'寵物1'}
            info={'豬皮'}
            mark={'(6歲 · 米克斯)'}
            icon={'/svg/booking_cat.svg'}         
          />
          <InfotableGroup
            title={'寵物2'}
            info={'阿啾'}
            mark={'(12歲 · 波斯貓)'}
            icon={'/svg/booking_cat.svg'}
          />
          <InfotableGroup
            title={'寵物3'}
            info={'球球'}
            mark={'(4歲 · 貴賓犬)'}
            icon={'/svg/booking_dog.svg'}
          /> 
        </div>
      </div>
      <div className={styles.submitBtnGroup}>
        <PrevBtn
          title={'上一步'}
          onClick={handlePrevStep}
        />
        <NextBtn
          title={'確認預約'}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

const FormStep4 = () => {
  const navigate = useNavigate()

  const handleToHomepage = () => {
    navigate('/')
  }

  const handleToRecord = () => {
    alert('to record')
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.confirmForm}>
        <h3 className={styles.confirmFormTitle}>你的看診號碼為</h3>
        <div className={styles.bookingNum}>13.14.15</div>
        <div className={styles.remind}>
          請於 <span className={styles.bookingTime}>2024/04/03 (三) 下午 15:00 </span> 前至現場報到等候。<br/>實際看診時間依現場狀況為主，謝謝您的預約！
        </div>
        <div className={styles.notice}>
          <h4 className={styles.noticeTitle}>注意事項</h4>
          <ul>
            <li className={styles.note}>若過號將由現場人員依現場狀況安排看診，怒不接受指定時間</li>
            <li className={styles.note}>若需修改預約時間，請至會員中心 > 預約記錄修改</li>
            <li className={styles.note}>若多次無故未到場報到，本院有權取消會員之預約資格</li>
            <li className={styles.note}>若有其他疑問敬請來電 0223456789</li>
          </ul>
        </div>
      </div>
      <div className={styles.submitBtnGroup}>
        <PrevBtn
          title={'返回首頁'}
          onClick={handleToHomepage}
        />
        <NextBtn
          title={'查看預約紀錄'}
          onClick={handleToRecord}
        />
      </div>
    </div>
  )
}

export { BookingContainer, StepGroup, FormStep1, FormStep2, FormStep3, FormStep4 };