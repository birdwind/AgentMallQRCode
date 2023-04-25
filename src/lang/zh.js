export default {
  el: {
    transfer: {
      noMatch: '查無資料',
      noData: '無資料'
    }
  },
  error: {
    usernameNotCorrect: '請輸入正確的帳號',
    passwordNotCorrect: '請輸入正確的密碼'
  },
  system: {
    dashboard: '儀表板',
    info: {
      title: '系統資訊',
      system: '系統',
      version: '版本',
      frontend: '後台系統',
      backend: '資料系統'
    },
    username: '帳號',
    password: '密碼',
    login: '登入',
    title: '代購管理系統',
    create: '新增',
    cancel: '取消',
    delete: '刪除',
    logged: {
      title: '確認登出',
      content: '您已經登出，您可以取消以留在此頁面，或重新登錄',
      confirm: '重新登錄'
    },
    logout: '登出'
  },
  dashboard: {
    btn: {
      play: '播放',
      pip: '子母畫面',
      back: '返回',
      pause: '暫停',
      fullscreen: '全螢幕',
      exitFullscreen: '離開全螢幕'
    },
    settings: {
      autoplay: '自動播放',
      loop: '循環',
      speed: '速度'
    }
  },
  rules: {
    required: '這個項目為必填'
  },
  table: {
    loading: '請稍等',
    confirm: '確認'
  },
  symptom: {
    dementia: '失智症',
    parkinson: '帕金森症',
    migraine: '偏頭痛'
  },
  role: {
    patient: '病人',
    caregiver: '照護者',
    nurse: '護士'
  },
  patient: {
    management: '病患管理',
    title: '病患',
    patient_name: '病人姓名',
    phone: '電話',
    condition: '病情',
    has_caregiver: '是否有照護者',
    comment: '評論',
    chart: '圖表',
    current_survey: '目前問卷',
    response: '回答',
    last_response: '最後回答',
    created: '建立時間',
    yes: '是',
    no: '否',
    name: '姓名',
    answer_questionnaire: {
      submit_time: '提交時間',
      survey_name: '問卷名稱',
      condition: '病情',
      respondent: '回答者',
      score: '得分',
      download: '下載'
    }
  },
  question: {
    title: '問題',
    edit_title: '編輯問題',
    create_title: '新增問題',
    topic: '主題',
    image: '圖片',
    answer_type: '回答類型',
    correct_answer: '正確答案',
    choose: '選擇',
    image_background: '圖片設為背景',
    image_background_tooltip: '將圖片顯示為繪圖區域的背景，供回答者繪製',
    upload_image: '上傳圖片',
    delete_image: '刪除圖片',
    condition_placeholder: '請選擇病情',
    respondent_placeholder: '請選擇回答者',
    topic_placeholder: '為此問題添加主題',
    answer_type_placeholder: '請選擇回答類型'
  },
  survey: {
    management: '問卷管理',
    title: '問卷',
    edit_title: '編輯問卷',
    create_title: '新增問卷',
    survey_name: '問卷名稱',
    description: '描述',
    created: '建立者',
    condition: '病情',
    respondent: '回答者',
    questions: '問題',
    create_time: '建立時間',
    update_time: '修改時間',
    prescriptions: '使用者',
    default: '預設',
    question: '問題',
    currently_use: '目前使用',
    one_question_page_survey: '一問一頁問卷',
    description_placeholder: '請輸入描述',
    answer_type: {
      title: '答案類型',
      yesno: '是/否',
      number: '數字',
      multiple_choice: '多選',
      drawing: '繪圖',
      audio: '音訊',
      video: '影片',
      weight: '比重'
    },
    question_source: '可用的',
    question_target: '包含的',
    schedule: {
      title: '排程',
      one_of_month: '一次/月',
      two_of_month: '二次/月',
      one_of_week: '一次/周',
      two_of_week: '二次/周',
      one_of_day: '一次/日',
      ad_hoc: '特殊'
    }
  }
}
