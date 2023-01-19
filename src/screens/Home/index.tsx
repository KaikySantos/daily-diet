import { SectionList } from "react-native";

import {
  Container,
  Header,
  Logo,
  MealsSectionTitle,
  MealsTitle,
  PercentButton,
  PercentButtonIcon,
  PercentButtonText,
  PercentButtonTitle,
  UserIcon
} from "./styles";

import logoImg from '@assets/logo.png';

import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

const DATA = [
  {
    title: '12.08.22',
    data: [
      {
        id: '1',
        time: '20:00',
        title: 'X-Tudo',
        status: 'red' as 'red' | 'green'
      },
      {
        id: '2',
        time: '18:00',
        title: 'Salada',
        status: 'green' as 'red' | 'green'
      },
      {
        id: '3',
        time: '18:00',
        title: 'Salada',
        status: 'green' as 'red' | 'green'
      }
    ],
  },
  {
    title: '11.08.22',
    data: [
      {
        id: '1',
        time: '20:00',
        title: 'X-Tudo',
        status: 'red' as 'red' | 'green'
      },
      {
        id: '2',
        time: '18:00',
        title: 'Salada',
        status: 'green' as 'red' | 'green'
      },
      {
        id: '3',
        time: '18:00',
        title: 'Salada',
        status: 'green' as 'red' | 'green'
      }
    ],
  },
  {
    title: '10.08.22',
    data: [
      {
        id: '1',
        time: '20:00',
        title: 'X-Tudo',
        status: 'red' as 'red' | 'green'
      },
      {
        id: '2',
        time: '18:00',
        title: 'Salada',
        status: 'green' as 'red' | 'green'
      },
      {
        id: '3',
        time: '18:00',
        title: 'Salada',
        status: 'green' as 'red' | 'green'
      }
    ],
  },
];

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />

        <UserIcon />
      </Header>

      <PercentButton>
        <PercentButtonTitle>90,86%</PercentButtonTitle>
        <PercentButtonText>das refeições dentro da dieta</PercentButtonText>
        <PercentButtonIcon />
      </PercentButton>

      <MealsTitle>Refeições</MealsTitle>
      <Button icon="add" title="Nova refeição" />

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <MealCard
            time={item.time}
            title={item.title}
            status={item.status}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <MealsSectionTitle>{title}</MealsSectionTitle>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}