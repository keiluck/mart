import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// 示例数据
const companyData = [
  {
    id: 1,
    name: '公司A',
    branches: [
      {
        id: 11,
        name: '分公司A-1',
        departments: [
          { id: 111, name: '部门A-1-1' },
          { id: 112, name: '部门A-1-2' },
        ],
      },
      {
        id: 12,
        name: '分公司A-2',
        departments: [
          { id: 121, name: '部门A-2-1' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: '公司B',
    branches: [
      {
        id: 21,
        name: '分公司B-1',
        departments: [
          { id: 211, name: '部门B-1-1' },
        ],
      },
    ],
  },
];

export default function ThreeLink() {
  const [companyId, setCompanyId] = useState('');
  const [branchId, setBranchId] = useState('');
  const [deptId, setDeptId] = useState('');

  // 当前选中公司的分公司
  const branches = companyData.find(c => c.id === Number(companyId))?.branches || [];
  // 当前选中分公司的部门
  const departments = branches.find(b => b.id === Number(branchId))?.departments || [];

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      {/* 公司选择 */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>公司</InputLabel>
        <Select
          value={companyId}
          label="公司"
          onChange={e => {
            setCompanyId(e.target.value);
            setBranchId('');
            setDeptId('');
          }}
        >
          {companyData.map(company => (
            <MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 分公司选择 */}
      <FormControl fullWidth sx={{ mb: 2 }} disabled={!companyId}>
        <InputLabel>分公司</InputLabel>
        <Select
          value={branchId}
          label="分公司"
          onChange={e => {
            setBranchId(e.target.value);
            setDeptId('');
          }}
        >
          {branches.map(branch => (
            <MenuItem key={branch.id} value={branch.id}>{branch.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 部门选择 */}
      <FormControl fullWidth sx={{ mb: 2 }} disabled={!branchId}>
        <InputLabel>部门</InputLabel>
        <Select
          value={deptId}
          label="部门"
          onChange={e => setDeptId(e.target.value)}
        >
          {departments.map(dept => (
            <MenuItem key={dept.id} value={dept.id}>{dept.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

