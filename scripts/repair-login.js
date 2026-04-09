const fs = require('fs');
const path = require('path');

const loginPath = path.join(process.cwd(), 'app', 'auth', 'login.tsx');

if (!fs.existsSync(loginPath)) {
  process.exit(0);
}

const src = fs.readFileSync(loginPath, 'utf8');
const broken = "我已阅读并同意《用户协议》《隐私政策》{'\n'}《儿童/青少年个人信息保护规则》";
const brokenMultiline = "我已阅读并同意《用户协议》《隐私政策》{'\n'}《儿童/青少年个人信息保护规则》";
const brokenLiteral = "我已阅读并同意《用户协议》《隐私政策》{'\n'}《儿童/青少年个人信息保护规则》";

if (
  src.includes("我已阅读并同意《用户协议》《隐私政策》{'") ||
  src.includes(broken) ||
  src.includes(brokenMultiline) ||
  src.includes(brokenLiteral)
) {
  const fixed = src
    .replace(
      /<Text style=\{styles\.agreementText\}>[\s\S]*?<\/Text>/m,
      '<View style={styles.agreementTextGroup}>\\n            <Text style={styles.agreementText}>我已阅读并同意《用户协议》《隐私政策》</Text>\\n            <Text style={styles.agreementText}>《儿童/青少年个人信息保护规则》</Text>\\n          </View>'
    )
    .replace(
      /agreementText:\s*\{\s*flex:\s*1,\s*/m,
      'agreementText: {\n    '
    );

  const withGroup = fixed.includes('agreementTextGroup')
    ? fixed
    : fixed.replace('  agreementText: {', '  agreementTextGroup: {\n    flex: 1\n  },\n  agreementText: {');

  fs.writeFileSync(loginPath, withGroup, 'utf8');
  console.log('[repair-login] fixed legacy unterminated-string pattern in app/auth/login.tsx');
}
