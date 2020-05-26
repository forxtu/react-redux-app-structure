## Redux app structure using hooks

### Requirements

- react
- redux
- react-redux v7+
- reselect (optional)
- usage of custom hooks (optional)

### Pros

- Clean structure
- Separation by features (files)
  - Separated "reducers"
  - Separated "actions"
  - Separated "types"
  - Separated "custom hooks"
- Any data and actions from the store can be reused using custom hooks just in 1 line
- Data and actions can be used by `useSelector` and selectors directly in any component
- Possibility to avoid passing "props" through a lot of components
- Possibility to avoid massive "connect, mapStateToProps, mapDispatchToProps" syntax
- Usage of the modern technologies and technics
