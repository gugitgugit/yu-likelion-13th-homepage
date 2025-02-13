import styled from 'styled-components';
import Lion from 'src/assets/background/lion.jpg';

export const LionImg = styled.div`
  width: 1621px;
  height: 1080px;
  flex-shrink: 0;
  background:
    linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 50.4%, #000 100%),
    linear-gradient(270deg, rgba(0, 0, 0, 0) 10%, #000 97.21%),
    url(${Lion}) lightgray 50% / cover no-repeat;
  position: absolute;
  top: 894px;
  right: -423px;
`;

export const Ellipse1 = styled.div`
  width: 3340px;
  height: 985px;
  flex-shrink: 0;
  border-radius: 3340px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(70, 93, 251, 0.8) 0%,
    rgba(70, 93, 251, 0) 100%
  );
  position: absolute;
  top: 120px;
`;

export const Ellipse2 = styled.div`
  height: 2306px;
  width: 1391px;
  flex-shrink: 0;
  border-radius: 2306px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(70, 93, 251, 0.4) 0%,
    rgba(70, 93, 251, 0) 100%
  );
  position: absolute;
  top: 1337px;
  right: -710px;
`;

export const Ellipse3 = styled.div`
  height: 2306px;
  width: 1391px;
  flex-shrink: 0;
  border-radius: 2306px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(70, 93, 251, 0.4) 0%,
    rgba(70, 93, 251, 0) 100%
  );
  position: absolute;
  top: 3678px;
  left: -742px;
`;
