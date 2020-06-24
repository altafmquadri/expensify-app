
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const database = firebase.database()

// //child_removed 
// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = []

//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'Cereal',
//     note: 'for month of june',
//     amount: 100,
//     createdAt: 0,
// })



// database.ref('notes/-MAZFYALGOFJUHnZCga5').remove()


// database.ref('notes/-MAZF6bg3bFIM6KhovPU').update({
//     body: 'buy food'
// })

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Angular Python'
// })


// database.ref().on('value', snapshot => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company} in ${val.location.city}`)
// }, e => console.log('error fetching data'))

// database.ref().update({
//     'job/company': 'Amazon',
// })

// database.ref().update({
//     'location/city': 'Houston'
// })

// database.ref().update({
//     'location/city': 'New York'
// })



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, e => console.log('error with data fetching', e))

// setTimeout(() => {
//     database.ref('age').set(39)
// }, 3500)

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(41)
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => console.log(snapshot.val()))
//     .catch(e => console.log('Error fetching data', e))

// database.ref().set({
//     name: 'Altaf Qaudri',
//     age: 38,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'QuadriCo'
//     },
//     location: {
//         city: 'Corona',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch(error => {
//     console.log('this failed, you can not access', error);
// })

// database.ref().update({
//     stressLevel: 3,
//     'job/company': "QuadriCo2",
//     'location/city': 'Dallas'
// })

// database.ref().set('this is my data')
// database.ref('age').set(39)
// database.ref('location/city').set('Flushing')


// database.ref('attributes').set({
//     height: "5'8",
//     weight: '275lbs'
// }).then(() => console.log('everything is working'))
//     .catch(e => console.log('nope not working!!', e))

// database.ref('isSingle').set(null)

// database.ref('isSingle').remove().then(() => console.log('isSingle removed'))
//     .catch(e => console.log('not removed', e))