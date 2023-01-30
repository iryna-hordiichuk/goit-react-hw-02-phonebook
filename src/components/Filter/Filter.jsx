import {Container} from "components/Container";
import { FilterInput, FilterLabel } from "./Filter.styled";


export const Filter = ({value, onChange}) => {

    return(
        <Container
        as="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <FilterLabel>
            <FilterInput type="text" value={value} onChange={onChange}/>
        </FilterLabel>

</Container>
    )

}
