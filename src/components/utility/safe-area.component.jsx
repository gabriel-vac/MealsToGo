import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && // StatusBar.currentHeight is only for android,
  `margin-top: ${StatusBar.currentHeight}px`}; //so I need to validate if this exists before change the margin */
`;
