import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Header from "../../components/Header";
import ProviderMock from "../../__mocks__/ProviderMock";

describe("<Header/>", () => {
  test("Header Logo image", () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find(".header__img")).toHaveLength(1);
  });

  test("Header Snapshot", () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
