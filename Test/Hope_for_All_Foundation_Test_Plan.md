# Hope for All Foundation - Donations Website Test Plan

## Application Overview

The Hope for All Foundation donations website is a multi-step donation platform built on PowerApps Portals. It includes a homepage with campaign listings, individual campaign detail pages, and a comprehensive 4-step donation form (Amount, Details, Dedication, Payment) integrated with Stripe for secure payment processing. The application supports multiple donation frequencies, donor types, and payment methods.

## Test Scenarios

### 1. Homepage & Campaign Listing Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify homepage displays all campaign cards with required information

**File:** `tests/homepage/campaign-listing.spec.ts`

**Steps:**
  1. Navigate to https://ahaimpactdev.powerappsportals.com/donations/
    - expect: Homepage loads successfully
    - expect: Campaign cards are displayed
    - expect: Each card shows campaign title, description, funding goal, funding percentage, number of contributors, start and end dates
  2. Verify campaign card elements for first campaign
    - expect: Campaign title is visible
    - expect: Description text is visible
    - expect: Funding goal shows 'X of Y' format (e.g., $2,200 of $50,000)
    - expect: Funding percentage shows as 'X% funded'
    - expect: Contributor count shows 'X contributors'
    - expect: Start date displays 'Started: [date]'
    - expect: End date displays 'Ends: [date]'
    - expect: Donate Now button is present and clickable
  3. Scroll down to verify multiple campaign cards are displayed
    - expect: Multiple campaign cards render properly
    - expect: All cards follow consistent styling
    - expect: Layout is responsive

#### 1.2. Verify campaign search functionality filters campaigns by name/description

**File:** `tests/homepage/search-campaigns.spec.ts`

**Steps:**
  1. Navigate to donations homepage
    - expect: Homepage loads with all campaigns visible
  2. Click on search box
    - expect: Search box receives focus
    - expect: Cursor is visible in search field
  3. Type partial campaign name (e.g., 'Camper')
    - expect: Search filters campaigns in real-time
    - expect: Only campaigns containing 'Camper' in name/description appear
    - expect: Non-matching campaigns are hidden or removed
  4. Clear search box
    - expect: All campaigns reappear
    - expect: Search field is empty
  5. Type a campaign name that does not exist (e.g., 'NonexistentCampaign')
    - expect: Zero campaigns display
    - expect: Empty state or 'No campaigns found' message appears

#### 1.3. Verify navigation menu and footer are present on homepage

**File:** `tests/homepage/navigation-footer.spec.ts`

**Steps:**
  1. Navigate to donations homepage
    - expect: Navigation menu is visible at top of page
  2. Verify navigation menu contains expected links
    - expect: Navigation menu is present
    - expect: Menu items are clickable
    - expect: Menu follows standard web navigation patterns
  3. Scroll to bottom of page
    - expect: Footer appears at bottom
    - expect: Contact information is visible
    - expect: Social media links are present
  4. Verify footer elements
    - expect: Contact info displays correctly
    - expect: Social links (if any) are functional
    - expect: Footer styling is consistent

#### 1.4. Verify 'Donate Now' button on campaign card navigates to campaign details

**File:** `tests/homepage/donate-button-navigation.spec.ts`

**Steps:**
  1. Navigate to donations homepage
    - expect: Homepage loads successfully
  2. Locate first campaign card and click 'Donate Now' button
    - expect: Page navigates to campaign details page
    - expect: URL changes to campaign-specific page
    - expect: Campaign title is visible on details page

### 2. Campaign Details Page Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Verify campaign details page displays all required sections

**File:** `tests/campaign-details/page-layout.spec.ts`

**Steps:**
  1. Navigate to campaign details page by clicking 'Donate Now' on a campaign card
    - expect: Campaign details page loads
    - expect: Page title matches campaign name
  2. Verify campaign information header section
    - expect: Campaign title is displayed prominently
    - expect: Campaign description is visible
    - expect: Funding progress bar is present
    - expect: Funding goal and current amount are shown
  3. Scroll to verify all sections are present
    - expect: Recent Donors section is visible
    - expect: Support the Cause section with donation tiers is displayed
    - expect: Share Campaign buttons are present
    - expect: FAQ section is visible
    - expect: Donate Now button is available

#### 2.2. Verify Recent Donors section displays donor information correctly

**File:** `tests/campaign-details/recent-donors.spec.ts`

**Steps:**
  1. Navigate to campaign details page
    - expect: Page loads successfully
  2. Locate Recent Donors section
    - expect: Section header 'Recent Donors' is visible
  3. Verify each donor entry contains: name, donation date, amount, and donation type
    - expect: Donor names are displayed
    - expect: Donation dates are shown in readable format
    - expect: Donation amounts are formatted with currency symbol
    - expect: Donation types (One-time, Monthly, etc.) are indicated
  4. Verify donor information is not exposed (privacy)
    - expect: No email addresses are displayed for donors
    - expect: No phone numbers are exposed
    - expect: Donor data is anonymized appropriately

#### 2.3. Verify donation tiers are displayed in Empower Every Camper's Journey section

**File:** `tests/campaign-details/donation-tiers.spec.ts`

**Steps:**
  1. Navigate to campaign details page
    - expect: Page loads successfully
  2. Locate 'Empower Every Camper's Journey' section
    - expect: Section is visible
  3. Verify all four donation tiers are displayed
    - expect: $50 - Nature Discovery Kit tier is shown
    - expect: $100 - Accessible Camp Weekend tier is shown
    - expect: $500 - All-Terrain Wheelchair tier is shown
    - expect: Each tier displays the gift/benefit description
  4. Verify tier pricing is formatted correctly
    - expect: All prices display with $ symbol
    - expect: Prices are clearly visible
    - expect: Tier descriptions are accurate

#### 2.4. Verify Share Campaign buttons are present and functional

**File:** `tests/campaign-details/share-campaign.spec.ts`

**Steps:**
  1. Navigate to campaign details page
    - expect: Page loads successfully
  2. Locate share buttons section
    - expect: Share buttons are visible
  3. Verify Facebook share button is present
    - expect: Facebook button is visible
    - expect: Button is clickable
  4. Verify LinkedIn share button is present
    - expect: LinkedIn button is visible
    - expect: Button is clickable
  5. Verify Twitter share button is present
    - expect: Twitter button is visible
    - expect: Button is clickable

#### 2.5. Verify FAQ section with collapsible questions

**File:** `tests/campaign-details/faq-section.spec.ts`

**Steps:**
  1. Navigate to campaign details page
    - expect: Page loads successfully
  2. Locate FAQ section
    - expect: FAQ section header is visible
    - expect: FAQ items are displayed
  3. Click on first FAQ item to expand
    - expect: FAQ item expands
    - expect: Answer text is revealed
    - expect: Expand/collapse indicator updates
  4. Click on expanded FAQ item to collapse
    - expect: FAQ item collapses
    - expect: Answer text is hidden
    - expect: Expand/collapse indicator updates
  5. Expand multiple FAQ items
    - expect: Multiple items can be expanded simultaneously
    - expect: All expanded items display their answers correctly

#### 2.6. Verify Trust & Security badges are displayed

**File:** `tests/campaign-details/trust-badges.spec.ts`

**Steps:**
  1. Navigate to campaign details page
    - expect: Page loads successfully
  2. Locate 'Trusted & Secure' section
    - expect: Section is visible
  3. Verify trust badges are displayed
    - expect: Security/trust badges are present
    - expect: Badges are visible and recognizable

#### 2.7. Verify Donate Now button on details page opens donation form modal

**File:** `tests/campaign-details/donate-modal.spec.ts`

**Steps:**
  1. Navigate to campaign details page
    - expect: Page loads successfully
  2. Click 'Donate Now' button
    - expect: Donation form modal opens
    - expect: Modal overlay covers page background
    - expect: Form is visible and ready for input

### 3. Donation Form - Amount Step Tests

**Seed:** `tests/seed.spec.ts`

#### 3.1. Verify Amount step displays all frequency options

**File:** `tests/donation-form/amount-step-frequency.spec.ts`

**Steps:**
  1. Navigate to campaign details page and click 'Donate Now'
    - expect: Donation form modal opens
    - expect: Amount step is displayed
  2. Verify donation frequency toggle buttons
    - expect: One-time button is visible
    - expect: Monthly button is visible
    - expect: Quarterly button is visible
    - expect: Yearly button is visible
  3. Click on 'Monthly' frequency button
    - expect: Monthly button is selected/highlighted
    - expect: Button state changes to indicate selection
    - expect: Form updates to reflect monthly donation
  4. Click on 'Quarterly' frequency button
    - expect: Quarterly button is selected/highlighted
    - expect: Previous selection is deselected
  5. Click on 'Yearly' frequency button
    - expect: Yearly button is selected/highlighted
  6. Click back on 'One-time' frequency button
    - expect: One-time button is selected/highlighted

#### 3.2. Verify Amount step displays all preset amount options

**File:** `tests/donation-form/amount-step-presets.spec.ts`

**Steps:**
  1. Navigate to donation form Amount step
    - expect: Amount step is displayed
  2. Verify preset amount radio buttons
    - expect: $25 radio button is present and selected by default
    - expect: $50 radio button is present
    - expect: $100 radio button is present
    - expect: $500 radio button is present
  3. Click on $50 radio button
    - expect: $50 is selected
    - expect: $25 selection is removed
  4. Click on $100 radio button
    - expect: $100 is selected
  5. Click on $500 radio button
    - expect: $500 is selected

#### 3.3. Verify custom amount input field accepts numeric values

**File:** `tests/donation-form/amount-step-custom.spec.ts`

**Steps:**
  1. Navigate to donation form Amount step
    - expect: Amount step is displayed
  2. Locate custom amount input field
    - expect: Custom amount field is visible
    - expect: $ symbol is displayed as prefix or placeholder
  3. Click on custom amount field and enter '75'
    - expect: Field accepts numeric input
    - expect: Value '75' is displayed in field
    - expect: Preset selection is automatically deselected
  4. Clear field and enter '1000'
    - expect: Field accepts new value
    - expect: Previous value is cleared
    - expect: New value '1000' is displayed
  5. Enter decimal value '99.99'
    - expect: Field accepts decimal values
    - expect: Value displays correctly

#### 3.4. Verify Cover Transaction Fee checkbox functionality

**File:** `tests/donation-form/amount-step-fee.spec.ts`

**Steps:**
  1. Navigate to donation form Amount step
    - expect: Amount step is displayed
  2. Verify Cover Transaction Fee checkbox is present and checked by default
    - expect: Checkbox is visible
    - expect: Checkbox is checked by default
    - expect: Label text is clear
  3. Uncheck the Cover Transaction Fee checkbox
    - expect: Checkbox becomes unchecked
    - expect: Form updates to reflect fee calculation change
  4. Check the checkbox again
    - expect: Checkbox becomes checked

#### 3.5. Verify Continue button validation and navigation

**File:** `tests/donation-form/amount-step-continue.spec.ts`

**Steps:**
  1. Navigate to donation form Amount step with valid preset amount
    - expect: Amount step displays with $25 selected by default
  2. Click Continue button
    - expect: Form advances to Step 2: Details
    - expect: Previous step data is retained
    - expect: Details step form is displayed
  3. Go back to Amount step
    - expect: Previously selected amount is still selected
    - expect: Previously selected frequency is still selected

#### 3.6. Verify form shows step indicator showing 1 of 4 on Amount step

**File:** `tests/donation-form/amount-step-indicator.spec.ts`

**Steps:**
  1. Navigate to donation form Amount step
    - expect: Amount step is displayed
  2. Verify step indicator shows '1' or 'Step 1'
    - expect: Step indicator is visible showing current step is 1 of 4

### 4. Donation Form - Details Step Tests

**Seed:** `tests/seed.spec.ts`

#### 4.1. Verify Details step displays donor type selector

**File:** `tests/donation-form/details-step-donor-type.spec.ts`

**Steps:**
  1. Navigate to donation form and advance to Details step
    - expect: Details step is displayed
  2. Verify donor type options are present
    - expect: Individual/Couple option is visible
    - expect: Business option is visible
  3. Select Individual/Couple donor type
    - expect: Individual/Couple is selected
  4. Select Business donor type
    - expect: Business is selected
    - expect: Form layout changes to show business-specific fields
  5. Switch back to Individual/Couple
    - expect: Individual/Couple is selected

#### 4.2. Verify couple donation checkbox appears for Individual/Couple donor type

**File:** `tests/donation-form/details-step-couple.spec.ts`

**Steps:**
  1. Navigate to Details step with Individual/Couple selected
    - expect: Details step displays
  2. Verify 'I am donating as a couple' checkbox is present
    - expect: Checkbox is visible
    - expect: Checkbox is unchecked by default
  3. Check the couple donation checkbox
    - expect: Checkbox becomes checked
    - expect: Additional name field appears for second donor (if applicable)
  4. Uncheck the checkbox
    - expect: Checkbox becomes unchecked

#### 4.3. Verify required donor information fields (First Name, Last Name, Email)

**File:** `tests/donation-form/details-step-required-fields.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Verify First Name field is present and required
    - expect: First Name field is visible
    - expect: Field is marked as required
  3. Verify Last Name field is present and required
    - expect: Last Name field is visible
    - expect: Field is marked as required
  4. Verify Email Address field is present and required
    - expect: Email Address field is visible
    - expect: Field is marked as required
    - expect: Field has email type or validation
  5. Enter valid information: First Name 'John', Last Name 'Doe', Email 'john@example.com'
    - expect: All fields accept input
    - expect: Values are displayed correctly

#### 4.4. Verify optional address information fields

**File:** `tests/donation-form/details-step-address.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Verify optional address fields are present
    - expect: Street Address field is visible
    - expect: City field is visible
    - expect: State field is visible
    - expect: Zip Code field is visible
    - expect: Phone Number field is visible
  3. Verify address fields are optional (no required indicators)
    - expect: Address fields do not show required markers
  4. Enter partial address info: Street '123 Main St', City 'Anytown'
    - expect: Fields accept input
    - expect: Partial address can be submitted without all fields
  5. Enter phone number in format with placeholder (e.g., 123-456-7890)
    - expect: Phone field displays placeholder format
    - expect: User can enter phone in that format

#### 4.5. Verify Make it Monthly promotion section

**File:** `tests/donation-form/details-step-monthly-promo.spec.ts`

**Steps:**
  1. Navigate to Details step after selecting One-time donation on Amount step
    - expect: Details step displays
  2. Verify 'Make it Monthly!' promotion section is visible
    - expect: Promotion section is displayed
    - expect: Button to upgrade to monthly is present
  3. Click 'Make it Monthly!' button
    - expect: Donation frequency changes to Monthly
    - expect: Form updates appropriately

#### 4.6. Verify Back and Continue button navigation on Details step

**File:** `tests/donation-form/details-step-navigation.spec.ts`

**Steps:**
  1. Navigate to Details step with required fields filled
    - expect: Details step is displayed with valid data
  2. Click Back button
    - expect: Form returns to Amount step
    - expect: Amount step data is preserved
  3. Click Continue button to return to Details
    - expect: Details step is displayed again
    - expect: Entered details are still there
  4. Fill in all required fields and click Continue
    - expect: Form advances to Step 3: Dedication

#### 4.7. Verify form shows step indicator showing 2 of 4 on Details step

**File:** `tests/donation-form/details-step-indicator.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Verify step indicator shows '2' or 'Step 2'
    - expect: Step indicator is visible showing current step is 2 of 4

### 5. Donation Form - Dedication Step Tests

**Seed:** `tests/seed.spec.ts`

#### 5.1. Verify Dedication step displays dedication options

**File:** `tests/donation-form/dedication-step-options.spec.ts`

**Steps:**
  1. Navigate to Dedication step
    - expect: Dedication step is displayed
  2. Verify 'Would you like to dedicate this donation?' section is present
    - expect: Section header is visible
  3. Verify 'In Honor Of' checkbox is present
    - expect: Checkbox is visible
    - expect: Checkbox is unchecked by default
  4. Verify 'In Memory Of' checkbox is present
    - expect: Checkbox is visible
    - expect: Checkbox is unchecked by default
  5. Check 'In Honor Of' checkbox
    - expect: Checkbox becomes checked
    - expect: Text input field appears for honoree name
  6. Uncheck 'In Honor Of' and check 'In Memory Of'
    - expect: In Honor Of is unchecked
    - expect: In Memory Of is checked
    - expect: Input field updates for 'In Memory Of'

#### 5.2. Verify employer matching donation checkbox

**File:** `tests/donation-form/dedication-step-employer.spec.ts`

**Steps:**
  1. Navigate to Dedication step
    - expect: Dedication step is displayed
  2. Verify 'Does your employer match charitable donations?' checkbox is present
    - expect: Checkbox is visible
    - expect: Checkbox is unchecked by default
    - expect: Label text is clear
  3. Check the employer match checkbox
    - expect: Checkbox becomes checked
  4. Uncheck the checkbox
    - expect: Checkbox becomes unchecked

#### 5.3. Verify Additional Comments text area

**File:** `tests/donation-form/dedication-step-comments.spec.ts`

**Steps:**
  1. Navigate to Dedication step
    - expect: Dedication step is displayed
  2. Verify Additional Comments text area is present
    - expect: Text area is visible
    - expect: Placeholder text is visible
    - expect: Field is marked as optional
  3. Click on text area and enter comment: 'This donation is important to me'
    - expect: Text area accepts input
    - expect: Text is displayed correctly
  4. Enter multiline comment with line breaks
    - expect: Text area preserves line breaks
    - expect: Multiline text displays correctly

#### 5.4. Verify Back and Continue to Payment button on Dedication step

**File:** `tests/donation-form/dedication-step-navigation.spec.ts`

**Steps:**
  1. Navigate to Dedication step
    - expect: Dedication step is displayed
  2. Click Back button
    - expect: Form returns to Details step
    - expect: Details step data is preserved
  3. Advance to Dedication step again
    - expect: Dedication step is displayed
  4. Click 'Continue to Payment' button
    - expect: Form advances to Step 4: Payment

#### 5.5. Verify form shows step indicator showing 3 of 4 on Dedication step

**File:** `tests/donation-form/dedication-step-indicator.spec.ts`

**Steps:**
  1. Navigate to Dedication step
    - expect: Dedication step is displayed
  2. Verify step indicator shows '3' or 'Step 3'
    - expect: Step indicator is visible showing current step is 3 of 4

### 6. Donation Form - Payment Step Tests

**Seed:** `tests/seed.spec.ts`

#### 6.1. Verify Payment step displays test mode indicator

**File:** `tests/donation-form/payment-step-test-mode.spec.ts`

**Steps:**
  1. Navigate to Payment step in test environment
    - expect: Payment step is displayed
  2. Verify Test Mode indicator is visible
    - expect: Test mode label is present
    - expect: Test mode is clearly indicated

#### 6.2. Verify Payment step displays donation amount with transaction fee

**File:** `tests/donation-form/payment-step-amount.spec.ts`

**Steps:**
  1. Navigate to Payment step after selecting $50 donation with fee coverage
    - expect: Payment step is displayed
  2. Verify donation amount is displayed
    - expect: Donation amount ($50) is shown
    - expect: Amount is formatted with $ symbol
  3. Verify transaction fee is calculated and displayed
    - expect: Transaction fee amount is shown
    - expect: Fee calculation is visible
    - expect: Total amount (donation + fee) is shown
  4. Navigate to Payment step after unchecking fee coverage on Amount step
    - expect: Donation amount displays alone without fee

#### 6.3. Verify Payment step displays email confirmation field

**File:** `tests/donation-form/payment-step-email.spec.ts`

**Steps:**
  1. Navigate to Payment step after entering email on Details step
    - expect: Payment step is displayed
  2. Verify email confirmation field is present
    - expect: Email field is visible
  3. Verify email is pre-filled from Details step
    - expect: Email field contains the email from Details step
    - expect: Email cannot be modified or can be modified as needed

#### 6.4. Verify Payment method selection - Card option

**File:** `tests/donation-form/payment-step-card.spec.ts`

**Steps:**
  1. Navigate to Payment step
    - expect: Payment step is displayed
  2. Verify Card payment option is present
    - expect: Card option is visible
    - expect: Card option is selected by default or available to select
  3. Verify supported card types are displayed
    - expect: Visa badge is shown
    - expect: MasterCard badge is shown
    - expect: American Express badge is shown
    - expect: UnionPay badge is shown
    - expect: JCB badge is shown
    - expect: Discover badge is shown
    - expect: Diners Club badge is shown

#### 6.5. Verify Payment method selection - US Bank Account option

**File:** `tests/donation-form/payment-step-bank.spec.ts`

**Steps:**
  1. Navigate to Payment step
    - expect: Payment step is displayed
  2. Verify US Bank Account payment option is present
    - expect: Bank account option is visible and selectable
  3. Click on US Bank Account option
    - expect: Bank account option becomes selected
    - expect: Payment form updates to show bank account fields

#### 6.6. Verify Stripe payment integration and iframe

**File:** `tests/donation-form/payment-step-stripe.spec.ts`

**Steps:**
  1. Navigate to Payment step
    - expect: Payment step is displayed
  2. Verify Stripe-powered payment interface is present
    - expect: Stripe payment form is visible
    - expect: 'Powered by Stripe' attribution is shown
  3. Verify payment form is loaded in iframe for security
    - expect: Stripe iframe is present
    - expect: Payment fields are within secure context

#### 6.7. Verify Pay button is present and functional

**File:** `tests/donation-form/payment-step-pay-button.spec.ts`

**Steps:**
  1. Navigate to Payment step
    - expect: Payment step is displayed
  2. Locate Pay button
    - expect: Pay button is visible
    - expect: Button text shows 'Pay' or 'Complete Donation'
    - expect: Button is clickable
  3. Verify Pay button is disabled before payment details are entered
    - expect: Pay button is initially disabled or shows appropriate state

#### 6.8. Verify Back button on Payment step

**File:** `tests/donation-form/payment-step-back.spec.ts`

**Steps:**
  1. Navigate to Payment step
    - expect: Payment step is displayed
  2. Click Back button
    - expect: Form returns to Dedication step
    - expect: All previous data is preserved
  3. Navigate back to Payment step
    - expect: Payment step displays with previous selections intact

#### 6.9. Verify form shows step indicator showing 4 of 4 on Payment step

**File:** `tests/donation-form/payment-step-indicator.spec.ts`

**Steps:**
  1. Navigate to Payment step
    - expect: Payment step is displayed
  2. Verify step indicator shows '4' or 'Step 4'
    - expect: Step indicator is visible showing current step is 4 of 4

### 7. Form Validation and Error Handling Tests

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify Details step prevents continue without required fields

**File:** `tests/validation/required-fields.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Leave First Name field empty and click Continue
    - expect: Form does not advance
    - expect: Error message appears for First Name field
    - expect: 'First Name is required' or similar message displays
  3. Fill First Name, leave Last Name empty, and click Continue
    - expect: Form does not advance
    - expect: Error message appears for Last Name field
  4. Fill First and Last Name, leave Email empty, and click Continue
    - expect: Form does not advance
    - expect: Error message appears for Email field
  5. Fill all required fields and click Continue
    - expect: Form advances to Dedication step

#### 7.2. Verify email address validation on Details step

**File:** `tests/validation/email-validation.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Enter invalid email 'notanemail' and click Continue
    - expect: Form does not advance
    - expect: Email validation error appears
    - expect: Error message indicates invalid email format
  3. Enter invalid email 'test@' and click Continue
    - expect: Form does not advance
    - expect: Email validation error appears
  4. Enter valid email 'test@example.com' and click Continue
    - expect: Email is accepted
    - expect: Form advances to Dedication step

#### 7.3. Verify custom amount validation on Amount step

**File:** `tests/validation/custom-amount-validation.spec.ts`

**Steps:**
  1. Navigate to Amount step
    - expect: Amount step is displayed
  2. Click on custom amount field and try to enter non-numeric characters (e.g., 'abc')
    - expect: Field does not accept non-numeric characters
    - expect: Only numbers are allowed
  3. Enter $0 or negative value and try to continue
    - expect: Form does not advance
    - expect: Error message indicates minimum amount requirement
  4. Enter extremely large amount (e.g., $999999999) and try to continue
    - expect: System either accepts or shows max limit error
    - expect: Behavior is consistent

#### 7.4. Verify phone number format validation

**File:** `tests/validation/phone-format.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Enter phone number in incorrect format and exit field
    - expect: Field either reformats automatically or shows no error for optional field
  3. Enter valid phone format and proceed
    - expect: Phone number is accepted

#### 7.5. Verify state validation for address

**File:** `tests/validation/state-validation.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Verify State field is a dropdown or accepts valid US state codes
    - expect: State field displays proper format or validation
  3. Enter invalid state code and continue
    - expect: Either field auto-corrects or accepts if optional

#### 7.6. Verify Dedication step honors both flags cannot be selected simultaneously

**File:** `tests/validation/dedication-flags.spec.ts`

**Steps:**
  1. Navigate to Dedication step
    - expect: Dedication step is displayed
  2. Check both 'In Honor Of' and 'In Memory Of' checkboxes
    - expect: Both can be checked and submitted
    - expect: Or only one can be selected at a time

#### 7.7. Verify form handles network errors gracefully

**File:** `tests/validation/network-errors.spec.ts`

**Steps:**
  1. Start donation form with good network connection
    - expect: Form loads successfully
  2. Simulate network disconnection while on Payment step
    - expect: Form shows error message
    - expect: User is notified of network issue
    - expect: Option to retry is provided

### 8. Edge Cases and User Scenarios

**Seed:** `tests/seed.spec.ts`

#### 8.1. Verify user can successfully complete 4-step donation with One-time frequency and preset amount

**File:** `tests/scenarios/complete-donation-onetime.spec.ts`

**Steps:**
  1. Navigate to donations homepage
    - expect: Homepage loads with campaigns visible
  2. Click 'Donate Now' on any campaign
    - expect: Campaign details page loads
  3. Click 'Donate Now' on campaign details
    - expect: Donation form modal opens at Amount step
  4. Select 'One-time' frequency and $100 amount, click Continue
    - expect: Amount is saved
    - expect: Form advances to Details step
  5. Fill donor details: First Name 'Jane', Last Name 'Smith', Email 'jane@example.com', click Continue
    - expect: Details are saved
    - expect: Form advances to Dedication step
  6. Check 'In Honor Of' and enter 'Mom', click 'Continue to Payment'
    - expect: Dedication is saved
    - expect: Form advances to Payment step
  7. Complete payment with test card
    - expect: Payment is processed
    - expect: Success message appears
    - expect: Donation is confirmed

#### 8.2. Verify user can successfully complete 4-step donation with Monthly frequency and custom amount

**File:** `tests/scenarios/complete-donation-monthly.spec.ts`

**Steps:**
  1. Navigate to donations homepage and click 'Donate Now' on campaign
    - expect: Campaign details page loads
    - expect: Donation form opens
  2. Select 'Monthly' frequency on Amount step
    - expect: Monthly frequency is selected
  3. Click on custom amount field and enter '250', click Continue
    - expect: Custom amount is saved
    - expect: Form advances to Details step
  4. Enter donor info and enable 'couple donation' checkbox, click Continue
    - expect: Couple donation option is saved
    - expect: Form advances to Dedication step
  5. Check 'In Memory Of', enter 'John', add comments, click 'Continue to Payment'
    - expect: Dedication info is saved
    - expect: Form advances to Payment step
  6. Select bank account payment method and complete payment
    - expect: Bank account details are provided
    - expect: Payment is processed
    - expect: Confirmation is shown

#### 8.3. Verify user can go back and forth through all form steps without losing data

**File:** `tests/scenarios/form-navigation.spec.ts`

**Steps:**
  1. Fill Amount step with Quarterly frequency and $500, click Continue
    - expect: Form advances to Details step
  2. Fill partial details and click Back
    - expect: Form returns to Amount step
    - expect: Quarterly and $500 are still selected
  3. Click Continue to Details step, fill all details, click Continue
    - expect: Details are saved
    - expect: Form advances to Dedication step
  4. Fill Dedication and click Continue to Payment, then click Back twice
    - expect: Each back click preserves data
    - expect: Can navigate backwards through steps

#### 8.4. Verify form handles special characters in text fields

**File:** `tests/scenarios/special-characters.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Enter special characters in First Name: 'Jean-Pierre'
    - expect: Field accepts hyphenated names
  3. Enter special characters in Last Name: "O'Brien"
    - expect: Field accepts apostrophes
  4. Enter address with special characters and continue
    - expect: Address field accepts special characters
    - expect: Form processes correctly
  5. Enter comments with emojis or special characters
    - expect: Comments field accepts various character types

#### 8.5. Verify form allows maximum length inputs in text fields

**File:** `tests/scenarios/max-length.spec.ts`

**Steps:**
  1. Navigate to Details step
    - expect: Details step is displayed
  2. Fill all text fields with maximum length valid data
    - expect: All fields accept maximum valid length
    - expect: Form does not break
  3. Try to exceed maximum length for comments field
    - expect: Field either limits input or accepts and processes correctly

#### 8.6. Verify form session persists during user thinking/idle time

**File:** `tests/scenarios/session-persistence.spec.ts`

**Steps:**
  1. Fill Amount and Details steps
    - expect: Data is entered
  2. Wait for 5 minutes without interaction
    - expect: Session remains active
    - expect: Form data is not lost
  3. Continue to next step
    - expect: Form data is intact
    - expect: Session timeout does not occur immediately

#### 8.7. Verify form handles rapid clicking on Continue buttons

**File:** `tests/scenarios/rapid-clicks.spec.ts`

**Steps:**
  1. Fill Amount step and rapidly click Continue button multiple times
    - expect: Form only advances once
    - expect: No duplicate submissions
    - expect: Form state remains consistent

#### 8.8. Verify form displays correctly on mobile/tablet devices

**File:** `tests/scenarios/responsive-design.spec.ts`

**Steps:**
  1. Access donation form on mobile device (375px width)
    - expect: Form displays properly on mobile
    - expect: All fields are accessible
    - expect: Layout is responsive
  2. Access donation form on tablet device (768px width)
    - expect: Form displays properly on tablet
    - expect: Text is readable
    - expect: Buttons are easily clickable
  3. Complete donation flow on mobile device
    - expect: Form is fully functional on mobile
    - expect: All steps can be completed

#### 8.9. Verify form accessibility for screen readers

**File:** `tests/scenarios/accessibility.spec.ts`

**Steps:**
  1. Access donation form with screen reader enabled
    - expect: All form labels are properly associated with inputs
    - expect: Buttons are announced correctly
    - expect: Form structure is logical and navigable
  2. Navigate form using keyboard only (Tab key)
    - expect: All interactive elements are reachable via keyboard
    - expect: Tab order is logical
    - expect: Focus indicators are visible
  3. Use Tab and Shift+Tab to navigate backwards
    - expect: Backward navigation works
    - expect: Focus moves correctly

#### 8.10. Verify user can abandon partially completed form without unintended consequences

**File:** `tests/scenarios/form-abandon.spec.ts`

**Steps:**
  1. Fill Amount step partially and close modal or navigate away
    - expect: Modal closes cleanly
    - expect: No error messages about incomplete submission
  2. Return to the same campaign and click 'Donate Now' again
    - expect: Fresh form appears
    - expect: Previous partial data is not pre-filled
    - expect: Form is ready for new donation

#### 8.11. Verify multiple campaigns can be accessed and donations can be made between them

**File:** `tests/scenarios/multiple-campaigns.spec.ts`

**Steps:**
  1. Navigate to homepage and select campaign A
    - expect: Campaign A details page loads
  2. Complete donation for campaign A
    - expect: Donation is successful
    - expect: Confirmation appears
  3. Navigate back to homepage
    - expect: Homepage loads with all campaigns
  4. Select campaign B and complete donation
    - expect: Campaign B donation is successful
    - expect: Different campaign can be donated to

#### 8.12. Verify form shows correct donation frequency impact on total amount due

**File:** `tests/scenarios/frequency-impact.spec.ts`

**Steps:**
  1. On Amount step, select Monthly frequency and $50 amount
    - expect: Amount displays as $50/month or similar
    - expect: Frequency is clear in payment summary
  2. Check 'Cover Transaction Fee' and observe total
    - expect: Fee is added to monthly calculation
    - expect: Total monthly amount is shown correctly
  3. Change frequency to Yearly
    - expect: Amount recalculates for yearly (e.g., $50/year)
    - expect: Total reflects yearly frequency
