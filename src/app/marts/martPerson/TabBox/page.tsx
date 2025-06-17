import React, { useState } from 'react';
import { Box, Tabs, Tab, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

// 示例 List 组件
const ListA = (props: { msg: string }) => <div>这是A的列表内容，{props.msg}</div>;
const ListB = (props: { msg: string }) => <div>这是B的列表内容，{props.msg}</div>;

// 示例 Modal 组件
const ModalA = (props: { info: string }) => <div>这是A的弹框内容，{props.info}</div>;
const ModalB = (props: { info: string }) => <div>这是B的弹框内容，{props.info}</div>;

const tabConfig = [
	{
		label: 'TabA',
		List: ListA,
		Modal: ModalA,
	},
	{
		label: 'TabB',
		List: ListB,
		Modal: ModalB,
	},
];

const TabBox: React.FC = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [open, setOpen] = useState(false);

	const { List, Modal } = tabConfig[tabIndex];

	return (
		<Box sx={{ p: 3 }}>
			<Tabs value={tabIndex} onChange={(_, v) => setTabIndex(v)}>
				{tabConfig.map((tab, idx) => (
					<Tab key={tab.label} label={tab.label} />
				))}
			</Tabs>
			<Box sx={{ mt: 2 }}>
				<List msg="hello props"/>
				<Button
					variant="outlined"
					sx={{ mt: 2 }}
					onClick={() => setOpen(true)}
				>
					打开弹框
				</Button>
				<Dialog open={open} onClose={() => setOpen(false)}>
					<DialogTitle>{tabConfig[tabIndex].label} 弹框</DialogTitle>
					<DialogContent>
						<Modal info="弹框props"/>
					</DialogContent>
				</Dialog>
			</Box>
		</Box>
	);
};

export default TabBox;

