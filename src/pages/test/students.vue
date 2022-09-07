<route lang="yaml">
  meta:
    layout: layouts_login
  </route>

<template>
  <div class="container">
    <div v-show="edit">
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-user"></i></span>
        <input type="text" v-model="form.name" class="form-control" placeholder="First Name"> <br>
        <input type="text" v-model="form.last" class="form-control" placeholder="lastname"> <br>
      </div>
      <button @click="doSave" class="btn" style="background-color:#5C5696;color:#fff;">
        SAVE
      </button>
    </div>

    <center><span class="text-header"> Students List </span></center>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col">
            แผนก:
            <select v-model="dep" class="form-select mt-3">
              <option value="1">
                ALL
              </option>
              <option value="IT">
                IT
              </option>
              <option value="ACC">
                ACC
              </option>
              <option value="MKT">
                MKT
              </option>
            </select>
          </div>
          <div class="col">
            หลักสูตร:
            <select v-model="curri" class="form-select mt-3">
              <option value="1">
                ALL
              </option>
              <option value="2">
                ปวช
              </option>
              <option value="3">
                ปวส
              </option>
            </select>
          </div>
        </div>
        <br>
        <table class="table table-hover ">
          <thead style="background-color:#5C5696;color:#fff;">
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Department</th>
              <th>ระดับชั้น</th>
              <th>จัดการข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, idx) in rows" :key="student.code">
              <td>{{ idx + 1 }}</td>
              <td>{{ student.code }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.last }}</td>
              <td>{{ student.dep }}</td>
              <td>{{ student.curri }}</td>
              <td>
                <button class="btn" @click="doEdit(student)" style="background-color:#5C5696;color:#fff;" alt="Edit">
                  <i class="fas fa-user-edit"></i>
                </button> &nbsp;&nbsp;
                <button class="btn" @click="doDel(student)" style="background-color:#5C5696;color:#fff;" alt="Del">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let students = []
    let depList = ['IT', 'ACC', 'MKT']
    for (let i = 0; i < 50; i++) {
      students.push({
        code: '662901' + String(i + 1).padStart(3, '0'),
        name: 'Name' + i,
        last: 'Last' + i,
        dep: depList[Math.floor(Math.random() * 3)],
        curri: Math.random() > 0.4 ? 'ปวช.' : 'ปวส',
      })
    }
    return {
      students,
      dep: '',
      curri: '',
      // name: '',
      // lastname: '',
      edit: false,
      studentEdit: null,
      form: {},
    }
  },
  computed: {
    rows() {
      if (this.dep === '') {
        return this.students
      }
      let output = []
      for (let i = 0; i < this.students.length; i++) {
        let student = this.students[i]
        if (student.dep === this.dep) {
          output.push(student)
        }
      }
      return output
    },
    rows2() {
      return this.students.filter(s => s.dep === this.dep)
    },
  },

  methods: {
    doEdit(student) {
      this.edit = true
      this.studentEdit = student
      this.form = JSON.parse(JSON.stringify(student))
      // this.name = student.name
      // this.last = student.last
    },

    doSave() {
      for (let key of Object.keys(this.form)) {
        this.studentEdit[key] = this.form[key]
      }

      // this.students.splice(idx, 1, this.form)
      // this.studentEdit.name = this.form.name
      // this.studentEdit.last = this.form.last
      this.edit = false
    },
  },
}
</script>

<style>
  .text-header {
    font-size: 50px;
    color:white;
  }
</style>
