import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/config';

test.describe('Login Tests', () => {
  test('go to google.com', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
  });

 
});
