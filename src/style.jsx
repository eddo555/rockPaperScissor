import styled from 'styled-components'

const Style = styled.div`

main {
background-color:#80FF72;
width:100vw;
height:100vh;

display:grid;
grid-template-columns: repeat(10, 10%);
grid-template-rows: repeat(5, 20%)
}

.title-wrapper {
    border:solid green;
    grid-column:4/8;
    grid-row:2/2;
}
.hand-wrapper {
    border:solid red;
    grid-column:2/10;
    grid-row: 3/4;
    display:flex;
    justify-content:space-around;
}
.hand {
     
     object-fit:contain
}
.counter-wrapper {
    border:solid blue;
    grid-column: 2/10;
    grid-row: 5/5;
}

`


export default Style