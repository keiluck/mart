import React, { useState } from 'react';
import {
  Box, TextField, Button, MenuItem, FormControl, InputLabel, Select, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, FormGroup, FormControlLabel, Checkbox
} from '@mui/material';

// 示例公司和部门数据
const companies = [
  { id: 1, name: '公司A', departments: ['部门A1', '部门A2'] },
  { id: 2, name: '公司B', departments: ['部门B1', '部门B2'] },
];

// 示例表格数据，增加 gender 字段
const allData = [
  { id: 1, company: '公司A', department: '部门A1', date: '2024-06-01', name: '张三', gender: '男' },
  { id: 2, company: '公司A', department: '部门A2', date: '2024-06-02', name: '李四', gender: '女' },
  { id: 3, company: '公司B', department: '部门B1', date: '2024-06-03', name: '王五', gender: '男' },
  { id: 4, company: '公司B', department: '部门B2', date: '2024-06-04', name: '赵六', gender: '女' },
  { id: 5, company: '公司A', department: '部门A1', date: '2024-06-01', name: '张三', gender: '男' },
  { id: 6, company: '公司A', department: '部门A2', date: '2025-06-02', name: '李四', gender: '女' },
  { id: 7, company: '公司B', department: '部门B1', date: '2025-06-03', name: '王五', gender: '男' },
  { id: 8, company: '公司B', department: '部门B2', date: '2025-06-04', name: '赵六', gender: '女' },
];

const Page: React.FC = () => {
  // 搜索条件状态
  const [company, setCompany] = useState('');
  const [department, setDepartment] = useState('');
  const [startDate, setStartDate] = useState('');
  // 性别筛选，数组可多选
  const [gender, setGender] = useState<string[]>([]);

  // 过滤后的表格数据
  const filteredData = allData.filter(row => {
    return (
      (!company || row.company === company) &&
      (!department || row.department === department) &&
      (!startDate || row.date >= startDate) &&
      (gender.length === 0 || gender.includes(row.gender))
    );
  });

  // 当前公司下的部门
  const currentDepartments = companies.find(c => c.name === company)?.departments || [];

  // 性别checkbox变化
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.name;
    setGender(prev =>
      event.target.checked
        ? [...prev, value]
        : prev.filter(g => g !== value)
    );
  };

  // 搜索按钮（可选，实际已随状态联动）
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以做接口请求
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* 搜索表单 */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <form onSubmit={handleSearch}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>公司</InputLabel>
              <Select
                value={company}
                label="公司"
                onChange={e => {
                  setCompany(e.target.value);
                  setDepartment('');
                }}
              >
                <MenuItem value="">全部</MenuItem>
                {companies.map(c => (
                  <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>部门</InputLabel>
              <Select
                value={department}
                label="部门"
                onChange={e => setDepartment(e.target.value)}
                disabled={!company}
              >
                <MenuItem value="">全部</MenuItem>
                {currentDepartments.map(dep => (
                  <MenuItem key={dep} value={dep}>{dep}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="开始日期"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              sx={{ minWidth: 160 }}
            />
            {/* 性别多选 */}
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gender.includes('男')}
                    onChange={handleGenderChange}
                    name="男"
                  />
                }
                label="男"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gender.includes('女')}
                    onChange={handleGenderChange}
                    name="女"
                  />
                }
                label="女"
              />
            </FormGroup>
            <Button type="submit" variant="contained">搜索</Button>
          </Box>
        </form>
      </Paper>

      {/* 数据表格 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>序号</TableCell>
              <TableCell>公司</TableCell>
              <TableCell>部门</TableCell>
              <TableCell>日期</TableCell>
              <TableCell>姓名</TableCell>
              <TableCell>性别</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.gender}</TableCell>
              </TableRow>
            ))}
            {filteredData.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">暂无数据</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Page;