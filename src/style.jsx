import styled from 'styled-components'

const Style = styled.div`

main {
background-color:#80FF72;
width:100vw;
height:100vh;

display:grid;
grid-template-columns: repeat(10, 10%);
grid-template-rows: repeat(5, 20%);
font-family:"rockwell";

}

.title-wrapper {
    grid-column:4/8;
    grid-row:1/3;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size:6vw;
}
.hand-wrapper {
    grid-column:2/10;
    grid-row: 3/5;
    display:flex;
    justify-content:space-between;
}
.hand {
     
     object-fit:contain;
     max-width:200px;
     min-width:50px;
     
}
.counter-wrapper {
    grid-column: 2/10;
    grid-row: 5/5;
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:4vw;
}

`


export default Style