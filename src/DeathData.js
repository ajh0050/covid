import { Data } from './Data.js';
// import {moment, format} from 'moment';

const ReverseData = Data.reverse();

const DeathData = () => ReverseData.map((rowOfData)=>({"date": rowOfData.date, "number of deaths": rowOfData.death}));

export default DeathData;

// export const masterData = () => {
    
//     let finalArray = [
        
//         DeathData()
        
//     ]
//     return finalArray
// };

// let TestList = ReverseData;

// const Test = () => TestList.map(())

// const Test = moment(TestList.date)
// .format('M[/]D')