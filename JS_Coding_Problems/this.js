const obj = {
  name: 'Puneet',
  song: function () {
    console.log(this)
  }
}

obj.song();