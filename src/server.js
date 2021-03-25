
var express = require('express');
var app = express();

app.get('/departments', (req, res) => {
  var Departments = [{
    id:1,
    name:'Development',
    employeeIds:[1,2]
    },
    {
      id:2,
      name:'Prototyping',
      employeeIds:[3,4]
    },{
      id:1,
      name:'Design',
      employeeIds:[5,6]
    },{
      id:3,
      name:'Sales',
      employeeIds:[7,8]
    },{
      id:4,
      name:'HR',
      employeeIds:[9,10]
  }, {
    id:5,
    name: 'Quality Assurance'
  }];

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(Departments);
});
app.get('/employees', (req, res) => {

  var Employees=[{
    id:1,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'John',
    surname:'Johansen',
    birthday: new Date('05/12/1991')
  },
  {
    id:2,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Christian',
    surname:'Christiansen',
    birthday: new Date('03/26/1989')
  },
  {
    id:3,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Nikolaj',
    surname:'Nikolajsen',
    birthday: new Date('06/18/1992')
  },
  {
    id:4,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Mia',
    surname:'Rasmussen',
    birthday: new Date('08/14/1999')
  },
  {
    id:5,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Layla',
    surname:'Laylasen',
    birthday: new Date('04/18/1997')
  },
  {
    id:6,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Mette',
    surname:'Haugaard',
    birthday: new Date('01/12/1995')
  },
  {
    id:7,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Frejsen',
    surname:'Frejasen',
    birthday: new Date('08/12/1997')
  },
  {
    id:8,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Mohsin',
    surname:'Mohhsinsen',
    birthday: new Date('01/18/1992')
  },
  {
    id:9,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Nazim',
    surname:'Randomsen',
    birthday: new Date('03/22/1994')
  },
  {
    id:10,
    img:'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
    name:'Javed',
    surname:'Iqbal',
    birthday: new Date('05/16/1998')
  }];

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(Employees);
});

app.listen(3000, ()=> {
  console.log('listening on port ', 3000)
})
