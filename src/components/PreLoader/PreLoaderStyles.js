import styled, { keyframes } from 'styled-components';

// const Loader = styled.div`
//   width: 250px;
//   height: 40px;
//   overflow: hidden;
//   background-color: rgb(255, 255, 255);
//   margin: auto;
//   border-radius: 20px;
//   -o-border-radius: 20px;
//   -ms-border-radius: 20px;
//   -webkit-border-radius: 20px;
//   -moz-border-radius: 20px;
// `;

// const bounce_loadingProgressG = keyframes`
// 	0%{
// 		margin-left:-250px;
// 	}

// 	100%{
// 		margin-left:250px;
// 	}
// `;

// const One = styled.div`
//   background-color: #6ab1d7;
//   margin-top: 0;
//   margin-left: -250px;
//   animation-name: ${bounce_loadingProgressG};
//   -o-animation-name: ${bounce_loadingProgressG};
//   -ms-animation-name: ${bounce_loadingProgressG};
//   -webkit-animation-name: ${bounce_loadingProgressG};
//   -moz-animation-name: ${bounce_loadingProgressG};
//   animation-duration: 2s;
//   -o-animation-duration: 2s;
//   -ms-animation-duration: 2s;
//   -webkit-animation-duration: 2s;
//   -moz-animation-duration: 2s;
//   animation-iteration-count: infinite;
//   -o-animation-iteration-count: infinite;
//   -ms-animation-iteration-count: infinite;
//   -webkit-animation-iteration-count: infinite;
//   -moz-animation-iteration-count: infinite;
//   animation-timing-function: linear;
//   -o-animation-timing-function: linear;
//   -ms-animation-timing-function: linear;
//   -webkit-animation-timing-function: linear;
//   -moz-animation-timing-function: linear;
//   width: 250px;
//   height: 40px;
// `;

const Loader = styled.div`
  width: 250px;
  height: 40px;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;

const cssloadMotion = keyframes`
	0% {
		transform: translateX(0) scale(1);
	}
	25% {
		transform: translateX(-49px) scale(0.3);
	}
	50% {
		transform: translateX(0) scale(1);
	}
	75% {
		transform: translateX(49px) scale(0.3);
	}
	100% {
		transform: translateX(0) scale(1);
	}
`;

const One = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #3399ff;
  border-radius: 50%;
  display: inline-block;
  animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  -o-animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  -ms-animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  -webkit-animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1)
    infinite;
  -moz-animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`;

export { Loader, One };
