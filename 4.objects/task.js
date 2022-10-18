function Student(name, gender, age) {}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (mark1, mark2, mark3, ...other) {
  this.marks = [mark1, mark2, mark3, ...other];
};

Student.prototype.getAverage = function () {
  if (this.marks.length === 0) {
    return 0;
  }
  let summ = 0;
  for (let i = 0; i < this.marks.length; i++) {
    summ += this.marks[i];
  }
  return summ / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete Student.setSubject;
  delete Student.addMarks;
  this.excluded = reason;
};
