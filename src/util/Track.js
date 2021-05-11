import ReactGA from 'react-ga';

export const initGA = () => {       
  ReactGA.initialize('UA-196726938-2'); 
} 

export const GApageView = (page) => {   
  ReactGA.pageview(page);   
}