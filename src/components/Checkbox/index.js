import React from 'react';

import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon} from './styles';

export default function Checkbox() {
  return (
    <CheckboxContainer>
        <HiddenCheckbox />
        <StyledCheckbox>
            <Icon checked={true} viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
  );
}
