import { SectionList } from "react-native";

import {
  Container,
  Header,
  Logo,
  MealsTitle,
  UserIcon
} from "./styles";

import logoImg from '@assets/logo.png';

import { Button } from "@components/Button";
import { PercentButton } from "@components/PercentButton";
import { MealsSection } from "@components/MealsSection";

import { MEALS } from "../../mock/meals";
export type IMeals = typeof MEALS

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <UserIcon />
      </Header>

      <PercentButton percentage={30.21} />

      <MealsTitle>Refeições</MealsTitle>
      <Button icon="add" title="Nova refeição" />

      <MealsSection meals={MEALS} />
    </Container>
  )
}