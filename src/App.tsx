import './App.css'
import {
  PdsAccordion,
  PdsAlert,
  PdsAvatar,
  PdsBox,
  PdsButton,
  PdsCheckbox,
  PdsChip,
  PdsCombobox,
  PdsCopytext,
  PdsDivider,
  PdsDropdownMenu,
  PdsDropdownMenuItem,
  PdsIcon,
  PdsImage,
  PdsInput,
  PdsLink,
  PdsLoader,
  PdsModal,
  PdsModalHeader,
  PdsModalContent,
  PdsModalFooter,
  PdsPopover,
  PdsProgress,
  PdsProperty,
  PdsRadio,
  PdsSelect,
  PdsSwitch,
  PdsTab,
  PdsTabs,
  PdsTabpanel,
  PdsTable,
  PdsTableBody,
  PdsTableCell,
  PdsTableHead,
  PdsTableHeadCell,
  PdsTableRow,
  PdsText,
  PdsTextarea,
  PdsToast,
  PdsTooltip,
} from '@pine-ds/react'
import { useState } from 'react'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <PdsText size="xxl" weight="bold" as="h1" style={{ marginBottom: '2rem' }}>
        Pine Design System Components
      </PdsText>
      
      <div style={{ display: 'grid', gap: '3rem' }}>
        {/* Accordion */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Accordion</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsAccordion>
            <span slot="summary">Click to expand accordion</span>
            <div>
              <PdsText>This is the accordion content that can be expanded or collapsed.</PdsText>
            </div>
          </PdsAccordion>
        </section>

        {/* Alert */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Alert</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'grid', gap: '1rem' }}>
            <PdsAlert>Default alert message</PdsAlert>
            <PdsAlert variant="success">Success! Your changes have been saved.</PdsAlert>
            <PdsAlert variant="warning">Warning: Please review before proceeding.</PdsAlert>
            <PdsAlert variant="danger">Error: Something went wrong.</PdsAlert>
          </div>
        </section>

        {/* Avatar */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Avatar</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <PdsAvatar name="John Doe" />
            <PdsAvatar name="Jane Smith" size="lg" />
            <PdsAvatar src="https://i.pravatar.cc/150?img=3" name="User Avatar" />
          </div>
        </section>

        {/* Button */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Button</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <PdsButton>Primary Button</PdsButton>
            <PdsButton variant="secondary">Secondary</PdsButton>
            <PdsButton variant="tertiary">Tertiary</PdsButton>
            <PdsButton variant="danger">Danger</PdsButton>
            <PdsButton disabled="true">Disabled</PdsButton>
            <PdsButton size="sm">Small</PdsButton>
            <PdsButton size="lg">Large</PdsButton>
            <PdsButton>
              <PdsIcon slot="start" name="plus" aria-hidden="true" />
              With Icon
            </PdsButton>
          </div>
        </section>

        {/* Checkbox */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Checkbox</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '2rem' }}>
            <PdsCheckbox label="Unchecked Option" />
            <PdsCheckbox label="Checked Option" checked="true" />
            <PdsCheckbox label="Disabled" disabled="true" />
          </div>
        </section>

        {/* Chip */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Chip</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <PdsChip>Default Chip</PdsChip>
            <PdsChip variant="primary">Primary</PdsChip>
            <PdsChip variant="success">Success</PdsChip>
            <PdsChip variant="warning">Warning</PdsChip>
            <PdsChip variant="danger">Danger</PdsChip>
            <PdsChip removable="true">Removable</PdsChip>
          </div>
        </section>

        {/* Combobox */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Combobox</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsCombobox label="Select or type an option" placeholder="Start typing...">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </PdsCombobox>
        </section>

        {/* Copy Text */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Copy Text</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsCopytext value="Click to copy this text!" />
        </section>

        {/* Divider */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Divider</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div>
            <PdsText>Content above divider</PdsText>
            <PdsDivider />
            <PdsText>Content below divider</PdsText>
          </div>
        </section>

        {/* Dropdown Menu */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Dropdown Menu</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsDropdownMenu>
            <PdsButton slot="trigger" variant="secondary">
              Open Dropdown
              <PdsIcon slot="end" name="chevron-down" aria-hidden="true" />
            </PdsButton>
            <PdsDropdownMenuItem>Option 1</PdsDropdownMenuItem>
            <PdsDropdownMenuItem>Option 2</PdsDropdownMenuItem>
            <PdsDropdownMenuItem>Option 3</PdsDropdownMenuItem>
          </PdsDropdownMenu>
        </section>

        {/* Icon */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Icon</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <PdsIcon name="home" />
            <PdsIcon name="user" />
            <PdsIcon name="settings" />
            <PdsIcon name="search" />
            <PdsIcon name="heart" />
            <PdsIcon name="star" />
          </div>
        </section>

        {/* Image */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Image</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsImage 
            src="https://via.placeholder.com/300x200" 
            alt="Placeholder image"
            width="300"
            height="200"
          />
        </section>

        {/* Input */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Input</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'grid', gap: '1rem' }}>
            <PdsInput label="Text Input" placeholder="Enter text..." />
            <PdsInput label="Email Input" type="email" placeholder="email@example.com" />
            <PdsInput label="Password Input" type="password" placeholder="Enter password..." />
            <PdsInput label="Disabled Input" disabled="true" value="Cannot edit this" />
          </div>
        </section>

        {/* Layout (Box) */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Layout</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'grid', gap: '1rem' }}>
            <PdsBox padding="sm" background="surface">
              <PdsText>Small padding box</PdsText>
            </PdsBox>
            <PdsBox padding="md" background="surface">
              <PdsText>Medium padding box</PdsText>
            </PdsBox>
            <PdsBox padding="lg" background="surface">
              <PdsText>Large padding box</PdsText>
            </PdsBox>
          </div>
        </section>

        {/* Link */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Link</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <PdsLink href="#">Standard Link</PdsLink>
            <PdsLink href="#" variant="primary">Primary Link</PdsLink>
            <PdsLink href="#" external="true">External Link</PdsLink>
          </div>
        </section>

        {/* Loader */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Loader</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <PdsLoader />
            <PdsLoader size="sm" />
            <PdsLoader size="lg" />
          </div>
        </section>

        {/* Modal */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Modal</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsButton onClick={() => setModalOpen(true)}>Open Modal</PdsButton>
          <PdsModal open={modalOpen} onPdsModalClose={() => setModalOpen(false)}>
            <PdsModalHeader>Modal Title</PdsModalHeader>
            <PdsModalContent>
              <PdsText>This is the modal content. You can put any content here.</PdsText>
            </PdsModalContent>
            <PdsModalFooter>
              <PdsButton variant="secondary" onClick={() => setModalOpen(false)}>Cancel</PdsButton>
              <PdsButton onClick={() => setModalOpen(false)}>Confirm</PdsButton>
            </PdsModalFooter>
          </PdsModal>
        </section>

        {/* Popover */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Popover</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsPopover>
            <PdsButton slot="trigger" variant="secondary">Click for Popover</PdsButton>
            <div style={{ padding: '1rem' }}>
              <PdsText>This is popover content!</PdsText>
            </div>
          </PdsPopover>
        </section>

        {/* Progress */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Progress</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <PdsProgress value="25" max="100" />
              <PdsText size="sm">25% Complete</PdsText>
            </div>
            <div>
              <PdsProgress value="60" max="100" />
              <PdsText size="sm">60% Complete</PdsText>
            </div>
            <div>
              <PdsProgress value="90" max="100" />
              <PdsText size="sm">90% Complete</PdsText>
            </div>
          </div>
        </section>

        {/* Property */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Property</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <PdsProperty label="Name" value="John Doe" />
            <PdsProperty label="Email" value="john.doe@example.com" />
            <PdsProperty label="Status" value="Active" />
          </div>
        </section>

        {/* Radio */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Radio</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '2rem' }}>
            <PdsRadio label="Option 1" name="radio-demo" />
            <PdsRadio label="Option 2" name="radio-demo" />
            <PdsRadio label="Option 3" name="radio-demo" checked="true" />
          </div>
        </section>

        {/* Select */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Select</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsSelect label="Choose an option">
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </PdsSelect>
        </section>

        {/* Switch */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Switch</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '2rem' }}>
            <PdsSwitch label="Off Switch" />
            <PdsSwitch label="On Switch" checked="true" />
            <PdsSwitch label="Disabled Switch" disabled="true" />
          </div>
        </section>

        {/* Table */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Table</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsTable>
            <PdsTableHead>
              <PdsTableRow>
                <PdsTableHeadCell>Name</PdsTableHeadCell>
                <PdsTableHeadCell>Email</PdsTableHeadCell>
                <PdsTableHeadCell>Status</PdsTableHeadCell>
              </PdsTableRow>
            </PdsTableHead>
            <PdsTableBody>
              <PdsTableRow>
                <PdsTableCell>John Doe</PdsTableCell>
                <PdsTableCell>john@example.com</PdsTableCell>
                <PdsTableCell>Active</PdsTableCell>
              </PdsTableRow>
              <PdsTableRow>
                <PdsTableCell>Jane Smith</PdsTableCell>
                <PdsTableCell>jane@example.com</PdsTableCell>
                <PdsTableCell>Pending</PdsTableCell>
              </PdsTableRow>
            </PdsTableBody>
          </PdsTable>
        </section>

        {/* Tabs */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Tabs</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsTabs>
            <PdsTab slot="tab">Tab One</PdsTab>
            <PdsTab slot="tab">Tab Two</PdsTab>
            <PdsTab slot="tab">Tab Three</PdsTab>
            
            <PdsTabpanel>Content for Tab One</PdsTabpanel>
            <PdsTabpanel>Content for Tab Two</PdsTabpanel>
            <PdsTabpanel>Content for Tab Three</PdsTabpanel>
          </PdsTabs>
        </section>

        {/* Text */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Text</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <PdsText size="xxl">Extra Extra Large Text</PdsText>
            <PdsText size="xl">Extra Large Text</PdsText>
            <PdsText size="lg">Large Text</PdsText>
            <PdsText size="md">Medium Text (default)</PdsText>
            <PdsText size="sm">Small Text</PdsText>
            <PdsText size="xs">Extra Small Text</PdsText>
            <PdsText weight="bold">Bold Text</PdsText>
            <PdsText weight="semibold">Semibold Text</PdsText>
          </div>
        </section>

        {/* Textarea */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Textarea</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsTextarea 
            label="Message" 
            placeholder="Enter your message here..." 
            rows="4"
            helperText="Maximum 500 characters"
          />
        </section>

        {/* Toast */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Toast</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <PdsButton onClick={() => setShowToast(true)}>Show Toast</PdsButton>
          {showToast && (
            <PdsToast 
              open={showToast} 
              onPdsToastClose={() => setShowToast(false)}
              autoClose="3000"
            >
              This is a toast notification!
            </PdsToast>
          )}
        </section>

        {/* Tooltip */}
        <section>
          <PdsText size="lg" weight="semibold" as="h2">Tooltip</PdsText>
          <PdsDivider style={{ margin: '1rem 0' }} />
          <div style={{ display: 'flex', gap: '2rem' }}>
            <PdsTooltip content="This is a helpful tooltip">
              <PdsButton variant="secondary">Hover me</PdsButton>
            </PdsTooltip>
            <PdsTooltip content="Top tooltip" placement="top">
              <PdsButton variant="secondary">Top</PdsButton>
            </PdsTooltip>
            <PdsTooltip content="Bottom tooltip" placement="bottom">
              <PdsButton variant="secondary">Bottom</PdsButton>
            </PdsTooltip>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App