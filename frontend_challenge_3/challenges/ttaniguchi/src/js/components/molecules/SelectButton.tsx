import React, { FC } from 'react';
import styled from 'styled-components';
import More from '@/js/components/atoms/icons/More';

const StyledRoot = styled.div`
  background: var(--body-group);
  border-radius: 4px;
  width: 100%;
`;
const StyledButton = styled.button`
  align-items: center;
  background: var(--white);
  border: 4px solid var(--body-group);
  border-radius: 4px;
  display: flex;
  font-size: 20px;
  height: 64px;
  line-height: 20px;
  outline: none;
  width: 100%;
`;
const MoreLayout = styled.div`
  padding-right: 0;
`;
const StyledHorizontalRule = styled.hr`
  border: 1px dotted var(--white);
  margin: 4px 0;
`;
const StyledDescription = styled.div`
  background: var(--body-group);
  font-size: 13px;
  padding: 0 8px 4px;
`;

export type Props = {
  label: string;
  description?: string;
  onClick: () => void;
};
const SelectButton: FC<Props> = ({ label, description, onClick }) => (
  <StyledRoot>
    <StyledButton onClick={onClick}>
      <MoreLayout>
        <More height={40} width={40} color="#ed9b38" />
      </MoreLayout>
      {label}
    </StyledButton>
    {description && (
      <>
        <StyledHorizontalRule />
        <StyledDescription>{description}</StyledDescription>
      </>
    )}
  </StyledRoot>
);

export default SelectButton;
