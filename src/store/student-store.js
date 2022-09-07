import { defineStore } from 'pinia'

// import { useStorage } from '@vueuse/core'
// import axios from '@/lib/axios.js'

// export const useStudentStore = defineStore('student', {
export const useStudentStore = defineStore('student', {
  state() { // data
    let students = []
    let depList = ['IT', 'ACC', 'MKT']
    for (let i = 0; i < 50; i++) {
      students.push({
        code: '6501' + String(i + 1).padStart(3, '0'),
        name: 'Name' + i,
        last: 'Last' + i,
        dep: depList[Math.floor(Math.random() * 3)],
        curri: Math.random() > 0.4 ? 'ปวช' : 'ปวส',
      })
    }
    return {
      students,
    }
  }, // state

  getters: { // computed
    porvorchorStudents() {
      return this.students.filter(x => x.curri === 'ปวช')
    },
  },

  actions: { // methods
    fetchStudents() {},
  }, // actions
})
