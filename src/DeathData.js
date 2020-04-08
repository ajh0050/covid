import { Data } from './Data.js';
import moment from 'moment';

const ReverseData = Data.reverse();

const DeathData = () => ReverseData.map((rowOfData)=>({"date": reformatDate(rowOfData.date), "number of deaths": rowOfData.death}));

const reformatDate = (date) => {
    let m = moment(date,"YYYYMMDD") 
   return m.format("M/D")
};

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