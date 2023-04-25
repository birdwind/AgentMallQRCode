import request from '@/utils/request'

const apiPrefix = '/patientmanagement'

export function getPatientList(params) {
  return request({
    url: `${apiPrefix}/patientlist`,
    method: 'get',
    params
  })
}

export function getPatientDetail(params) {
  return request({
    url: `${apiPrefix}/patientdetail`,
    method: 'get',
    params
  })
}

export function getQuestionnaire(params) {
  return request({
    url: `${apiPrefix}/questionnaire`,
    method: 'get',
    params
  })
}

export function getPatientChart(params) {
  return request({
    url: `${apiPrefix}/surveytotalscore`,
    method: 'get',
    params
  })
}
