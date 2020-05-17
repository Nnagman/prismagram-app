import React from "react";
import styled from "styled-components/native";

const View = styled.View``;
const Text = styled.Text``;

export default ({ navigation }) => (
  <View>
    <Text>I should fetch for: {navigation.getParam("id")} </Text>
  </View>
);
