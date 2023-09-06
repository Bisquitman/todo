import { useState} from "react";
import {FormWrapper, FormBlock, FormField, FormInput, FormButton} from "./Form.styled";
import plusIcon from '../../assets/images/plus.png';

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('');

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (text) {
      props.createNewToDo(text);
      setText('');
    }
  };

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormField>
          <FormInput
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <FormButton icon={plusIcon}/>
        </FormField>
      </FormBlock>
    </FormWrapper>
  );
}
