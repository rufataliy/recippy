import renderer from "react-test-renderer";

export const testSnapshotOf = (Component: React.ReactElement) => {
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
};
