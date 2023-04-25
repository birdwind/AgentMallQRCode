import request from '@/utils/request'

const apiPrefix = '/surveyManagement'

export function getSurveyList(params) {
  return request({
    url: `${apiPrefix}/surveyList`,
    method: 'get',
    params
  })
}

export function getQuestionList(params) {
  return request({
    url: `${apiPrefix}/questionList`,
    method: 'get',
    params
  })
}

export function getQuestionDetail(params) {
  return request({
    url: `${apiPrefix}/questionDetail`,
    method: 'get',
    params
  })
}

export function getQuestionTopics(params) {
  return request({
    url: `${apiPrefix}/questionTopicList`,
    method: 'get',
    params
  })
}

export function getQuestionAnswerType(params) {
  return request({
    url: `${apiPrefix}/answerTypeList`,
    method: 'get',
    params
  })
}

export function createQuestion(data) {
  return request({
    url: `${apiPrefix}/addQuestion`,
    method: 'post',
    data
  })
}

export function updateQuestion(data) {
  return request({
    url: `${apiPrefix}/editQuestion`,
    method: 'patch',
    data
  })
}

export function getSurveyDetail(params) {
  return request({
    url: `${apiPrefix}/surveyDetail`,
    method: 'get',
    params
  })
}

export function getAvailableQuestion(params) {
  return request({
    url: `${apiPrefix}/availableQuestions`,
    method: 'get',
    params
  })
}

export function createSurvey(data) {
  return request({
    url: `${apiPrefix}/addSurvey`,
    method: 'post',
    data
  })
}

export function editSurvey(data) {
  return request({
    url: `${apiPrefix}/editSurvey`,
    method: 'patch',
    data
  })
}

export function uploadMedia(params) {
  return request({
    url: `${apiPrefix}/uploadmedia`,
    method: 'post'
  })
}
