import React from "react";
import styled from "styled-components/native";
import SearchBar from "../../components/SearchBar";
import { CommonActions } from "@react-navigation/native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default class extends React.Component {
  static navigationOptions = ({ route, navigation }) => ({
    headerTitle: (
      <SearchBar
        value={route.params?.term || ""}
        onChange={route.params?.onChange || (() => null)}
        onSubmit={route.params?.onSubmit || (() => null)}
      />
    ),
  });
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.state = {
      term: "",
    };
    navigation.dispatch(
      CommonActions.setParams({
        term: this.state.term,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
      })
    );
  }
  onChange = (text) => {
    const { navigation } = this.props;
    this.setState({ term: text });
    navigation.dispatch(
      CommonActions.setParams({
        term: text,
      })
    );
  };
  onSubmit = () => {
    console.log("Submit");
  };
  render() {
    return (
      <View>
        <Text>Search</Text>
      </View>
    );
  }
}
