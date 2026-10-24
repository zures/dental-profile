<?php
// Cập nhật thông tin bác sĩ tại config.php.
$profile = require __DIR__ . '/config.php';
function e(string $value): string { return htmlspecialchars($value, ENT_QUOTES, 'UTF-8'); }
ob_start();
require __DIR__ . '/template.php';
$html = ob_get_clean();
echo $html;
