const structureBtnFunc = (
  currentType,
  val,
  structureTypes,
  setStructureTypes
) => {
  if (structureTypes[val].includes(currentType)) {
    if (structureTypes[val].length === 1) {
      //현재 버튼만 눌려졌는데 값이 1개일때, 전체 버튼 선택됨
      setStructureTypes({ ...structureTypes, [val]: ["전체"] });
    } else {
      setStructureTypes({
        //현재 버튼만 뺄때
        ...structureTypes,
        [val]: structureTypes[val].filter((type) => type !== currentType),
      });
    }
  } else if (structureTypes[val].length >= 4) {
    //4개 버튼을 다눌렀을때
    setStructureTypes({ ...structureTypes, [val]: ["전체"] });
  } else {
    setStructureTypes({
      // 전체 버튼 선택할때
      ...structureTypes,
      [val]: [
        ...structureTypes[val].filter((type) => type !== "전체"),
        currentType,
      ],
    });
  }
};

export default structureBtnFunc;
