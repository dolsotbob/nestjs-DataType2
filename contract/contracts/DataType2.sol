// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataType2 {
    string private message = "Hello, Solidity!";
    uint256[] private numbers;
    string[] private names;
    struct User {
        string name;
        uint256 age;
    }
    mapping(address => User) private users;
    mapping(address => uint256) private balances;
    mapping(address => bool) private registered; // 사용자 등록 여부 확인용

    bytes private dynamicData = "";
    bytes32 private fixedData =
        0xabcdef1234560000000000000000000000000000000000000000000000000000;

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getNumbers() public view returns (uint256[] memory) {
        return numbers;
    }

    function addNumber(uint256 _number) public {
        numbers.push(_number);
    }

    function getNumber(uint256 i) public view returns (uint256) {
        require(i < numbers.length, "Index out of bounds");
        return numbers[i];
    }

    function getNames() public view returns (string[] memory) {
        return names;
    }

    function addName(string memory _name) public {
        names.push(_name);
    }

    function setBalance(address _userAddr, uint256 _amount) public {
        balances[_userAddr] += _amount;
    }

    function getBalance(address _userAddr) public view returns (uint256) {
        return balances[_userAddr];
    }

    function setUser(
        address _userAddr,
        string memory _name,
        uint256 _age
    ) public {
        require(bytes(_name).length > 0, "Name cannot be empty");

        users[_userAddr] = User(_name, _age);
        registered[_userAddr] = true;
    }

    function getUser(
        address _userAddr
    ) public view returns (string memory, uint256) {
        require(registered[_userAddr], "User not found");
        User memory user = users[_userAddr];
        return (user.name, user.age);
    }

    function setDynamicData(bytes memory _dynamicData) public {
        dynamicData = _dynamicData;
    }

    function getDynamicData() public view returns (bytes memory) {
        return dynamicData;
    }

    function setFixedData(bytes32 _fixedData) public {
        fixedData = _fixedData;
    }

    function getFixedData() public view returns (bytes32) {
        return fixedData;
    }

    function getDetails()
        public
        view
        returns (
            string memory,
            uint256[] memory,
            string[] memory,
            bytes32,
            bytes memory
        )
    {
        return (message, numbers, names, fixedData, dynamicData);
    }
}
